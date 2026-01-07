/**
 * Enhanced Security Headers Middleware
 * Implements comprehensive security headers for enterprise-grade protection
 * Includes CSP, HSTS, XSS protection, and advanced security measures
 */

const helmet = require('helmet');
const crypto = require('crypto');

/**
 * Generate secure nonce for CSP headers
 * @returns {string} Base64 encoded nonce
 */
const generateNonce = () => crypto.randomBytes(16).toString('base64');

/**
 * Creates comprehensive security headers configuration
 * @param {Object} options - Configuration options
 * @returns {Function} Express middleware function
 */
const createEnhancedSecurityHeadersMiddleware = (options = {}) => {
  const {
    contentSecurityPolicy = {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'", // Required for React/Vite development
          "'unsafe-eval'", // Required for Vite dev server
          'https://apis.google.com',
          'https://cdn.jsdelivr.net',
          'https://www.googletagmanager.com',
        ],
        styleSrc: [
          "'self'",
          "'unsafe-inline'", // Required for Tailwind CSS
          'https://fonts.googleapis.com',
          'https://cdn.jsdelivr.net',
        ],
        fontSrc: [
          "'self'",
          'https://fonts.gstatic.com',
          'https://cdn.jsdelivr.net',
        ],
        imgSrc: [
          "'self'",
          'data:',
          'https:',
          'blob:',
          'https://*.googleusercontent.com',
          'https://*.gstatic.com',
        ],
        connectSrc: [
          "'self'",
          'https://generativelanguage.googleapis.com',
          'https://api.gemini.google.com',
          'https://www.google-analytics.com',
          'https://analytics.google.com',
        ],
        frameSrc: [
          "'self'",
          'https://www.youtube.com',
          'https://player.vimeo.com',
        ],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'", 'https:', 'blob:'],
        workerSrc: ["'self'", 'blob:'],
        childSrc: ["'self'", 'blob:'],
        formAction: ["'self'"],
        frameAncestors: ["'none'"],
        baseUri: ["'self'"],
        manifestSrc: ["'self'"],
        prefetchSrc: ["'self'"],
        navigateTo: ["'self'"],
      },
      reportUri: '/api/security/csp-violation',
    },
    referrerPolicy = { policy: 'strict-origin-when-cross-origin' },
    crossOriginEmbedderPolicy = false, // Disable for API compatibility
    hsts = {
      maxAge: 31536000, // 1 year
      includeSubDomains: true,
      preload: true,
    },
    noSniff = true,
    xssFilter = true,
    noOpen = true,
    originAgentCluster = true,
    permittedCrossDomainPolicies = false,
    forceHTTPSRedirect = true,
    excludeErrorPages = false,
    featurePolicy = {
      features: {
        fullscreen: ["'self'"],
        payment: ["'none'"],
        syncXhr: ["'none'"],
        accelerometer: ["'none'"],
        gyroscope: ["'none'"],
        magnetometer: ["'none'"],
        camera: ["'none'"],
        microphone: ["'none'"],
        geolocation: ["'none'"],
        notifications: ["'self'"],
        push: ["'self'"],
        midi: ["'none'"],
        encryptedMedia: ["'none'"],
        usb: ["'none'"],
        serial: ["'none'"],
        screenWakeLock: ["'none'"],
        clipboardRead: ["'none'"],
        clipboardWrite: ["'none'"],
        displayCapture: ["'none'"],
      },
    },
  } = options;

  return helmet({
    contentSecurityPolicy,
    crossOriginEmbedderPolicy,
    crossOriginOpenerPolicy: { policy: 'same-origin' },
    crossOriginResourcePolicy: { policy: 'same-origin' },
    dnsPrefetchControl: { allow: false },
    frameguard: { action: 'deny' },
    hsts,
    ieNoOpen: noOpen,
    noSniff,
    originAgentCluster,
    permittedCrossDomainPolicies,
    referrerPolicy,
    xssFilter,
    // Additional security headers
    hidePoweredBy: true,
    noSniff: true,
    featurePolicy,
  });
};

/**
 * Apply enhanced security headers with CSP for specific routes
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const applyEnhancedSecurityHeaders = (req, res, next) => {
  // Generate nonce for CSP
  const nonce = generateNonce();

  // Add additional security headers not covered by helmet
  res.setHeader('X-Permitted-Cross-Domain-Policies', 'none');
  res.setHeader('X-Download-Options', 'noopen');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader(
    'Permissions-Policy',
    [
      'accelerometer=()',
      'autoplay=()',
      'camera=()',
      'clipboard-read=()',
      'clipboard-write=()',
      'display-capture=()',
      'encrypted-media=()',
      'fullscreen=(self)',
      'geolocation=()',
      'gyroscope=()',
      'magnetometer=()',
      'microphone=()',
      'midi=()',
      'payment=()',
      'picture-in-picture=()',
      'publickey-credentials-get=(self)',
      'screen-wake-lock=()',
      'serial=()',
      'usb=()',
      'vr=()',
      'xr-spatial-tracking=()',
    ].join(', ')
  );

  // Add security headers for modern browsers
  res.setHeader(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );
  res.setHeader('Expect-CT', 'max-age=86400, enforce');
  res.setHeader('Server', 'Secure Server'); // Hide server information

  // Add CSP nonce to response locals for use in templates
  res.locals.cspNonce = nonce;

  next();
};

/**
 * CSP violation reporting endpoint with enhanced security
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const handleCSPViolation = async (req, res) => {
  try {
    const violationReport = {
      timestamp: new Date().toISOString(),
      documentURI: req.body['document-uri'],
      blockedURI: req.body['blocked-uri'],
      violatedDirective: req.body['violated-directive'],
      effectiveDirective: req.body['effective-directive'],
      originalPolicy: req.body['original-policy'],
      sourceFile: req.body['source-file'],
      lineNumber: req.body['line-number'],
      columnNumber: req.body['column-number'],
      userAgent: req.headers['user-agent'],
      ip: req.ip,
      method: req.method,
      path: req.path,
    };

    // Log violation for monitoring
    console.warn(
      'CSP Violation Detected:',
      JSON.stringify(violationReport, null, 2)
    );

    // In production, you might want to:
    // 1. Send to security monitoring system (Sentry, DataDog, etc.)
    // 2. Block requests from suspicious sources
    // 3. Alert security team
    // 4. Implement rate limiting for repeat offenders

    // For now, just log and respond
    res.status(204).end();
  } catch (error) {
    console.error('Error processing CSP violation:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * Security headers for API endpoints
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const applyAPISecurityHeaders = (req, res, next) => {
  // API-specific security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; font-src 'self'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'"
  );
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );

  next();
};

/**
 * Generate security headers report for monitoring
 * @returns {Object} Security headers status report
 */
const generateSecurityHeadersReport = () => ({
  timestamp: new Date().toISOString(),
  securityHeaders: {
    hsts: 'Enabled with preload',
    csp: 'Comprehensive policy with reporting',
    xssProtection: 'Enabled with blocking',
    contentTypeOptions: 'nosniff enabled',
    frameOptions: 'DENY',
    referrerPolicy: 'strict-origin-when-cross-origin',
    permissionsPolicy: 'Restrictive permissions',
    featurePolicy: 'Restrictive features',
  },
  recommendations: [
    'Monitor CSP violations regularly',
    'Review and update CSP directives periodically',
    'Consider adding additional security headers as needed',
  ],
});

module.exports = {
  createEnhancedSecurityHeadersMiddleware,
  applyEnhancedSecurityHeaders,
  handleCSPViolation,
  applyAPISecurityHeaders,
  generateSecurityHeadersReport,
  generateNonce,
};
