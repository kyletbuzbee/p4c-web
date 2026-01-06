/**
 * Security Headers Middleware
 * Implements comprehensive security headers for enterprise-grade protection
 */

const helmet = require('helmet');

/**
 * Creates comprehensive security headers configuration
 * @param {Object} options - Configuration options
 * @returns {Function} Express middleware function
 */
const createSecurityHeadersMiddleware = (options = {}) => {
  const {
    contentSecurityPolicy = {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'", // Required for React/Vite development
          "'unsafe-eval'", // Required for Vite dev server
          "https://apis.google.com",
          "https://cdn.jsdelivr.net",
        ],
        styleSrc: [
          "'self'",
          "'unsafe-inline'", // Required for Tailwind CSS
          "https://fonts.googleapis.com",
        ],
        fontSrc: ["'self'", 'https://fonts.gstatic.com'],
        imgSrc: ["'self'", 'data:', 'https:', 'blob:'],
        connectSrc: [
          "'self'",
          "https://generativelanguage.googleapis.com",
          "https://api.gemini.google.com",
        ],
        frameSrc: ["'self'"],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"],
        workerSrc: ["'self'", "blob:"],
        childSrc: ["'self'"],
        formAction: ["'self'"],
        frameAncestors: ["'none'"],
        baseUri: ["'self'"],
      },
    },
    referrerPolicy = { policy: "no-referrer-when-downgrade" },
    crossOriginEmbedderPolicy = false, // Disable for API compatibility
    hsts = {
      maxAge: 31536000,
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
  } = options;

  return helmet({
    contentSecurityPolicy,
    crossOriginEmbedderPolicy,
    crossOriginOpenerPolicy: { policy: "same-origin" },
    crossOriginResourcePolicy: { policy: "same-origin" },
    dnsPrefetchControl: { allow: false },
    frameguard: { action: "deny" },
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
  });
};

/**
 * Apply security headers with CSP for specific routes
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const applySecurityHeaders = (req, res, next) => {
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
      'fullscreen=()',
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
    ].join(', '),
  );

  next();
};

/**
 * CSP violation reporting endpoint
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const handleCSPViolation = (req, res) => {
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
  };

  // Log violation for monitoring (in production, send to security monitoring system)
  console.warn('CSP Violation Detected:', violationReport);

  // In production, you might want to:
  // 1. Send to security monitoring system (Sentry, DataDog, etc.)
  // 2. Block requests from suspicious sources
  // 3. Alert security team

  res.status(204).end();
};

module.exports = {
  createSecurityHeadersMiddleware,
  applySecurityHeaders,
  handleCSPViolation,
};
