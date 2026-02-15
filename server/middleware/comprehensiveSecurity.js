/**
 * Comprehensive Security Middleware
 * Implements rate limiting, input validation, and advanced security measures
 */

const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss');
const helmet = require('helmet');

/**
 * Enhanced rate limiting configuration
 */
const createAdvancedRateLimiter = (options = {}) => {
  const {
    windowMs = 15 * 60 * 1000, // 15 minutes
    max = 100,
    skipSuccessfulRequests = false,
    skipFailedRequests = false,
    standardHeaders = true,
    legacyHeaders = false,
    message = {
      error: 'Too many requests from this IP, please try again later.',
      retryAfter: Math.ceil(windowMs / 1000),
      limit: max,
    },
    keyGenerator = (req) => {
      // Use multiple factors for rate limiting
      const ip = req.ip || req.connection.remoteAddress;
      const userAgent = req.get('User-Agent') || 'unknown';
      const userId = req.user?.id || 'anonymous';

      // Create a composite key
      return `${ip}:${userAgent}:${userId}`;
    },
    skip = (req) => {
      // Skip rate limiting for trusted IPs or internal requests
      const trustedIPs = process.env.TRUSTED_IPS?.split(',') || [];
      return trustedIPs.includes(req.ip);
    },
  } = options;

  return rateLimit({
    windowMs,
    max,
    skipSuccessfulRequests,
    skipFailedRequests,
    standardHeaders,
    legacyHeaders,
    message,
    keyGenerator,
    skip,
    handler: (req, res) => {
      console.warn(
        `Rate limit exceeded for IP: ${req.ip}, User-Agent: ${req.get('User-Agent')}`
      );
      res.status(429).json({
        error: 'Rate limit exceeded',
        message: message.error,
        retryAfter: message.retryAfter,
        timestamp: new Date().toISOString(),
      });
    },
  });
};

/**
 * Input validation and sanitization middleware
 */
const createInputValidation = () => (req, res, next) => {
  // Sanitize request body
  if (req.body && typeof req.body === 'object') {
    sanitizeObject(req.body);
  }

  // Sanitize query parameters
  if (req.query && typeof req.query === 'object') {
    sanitizeObject(req.query);
  }

  // Sanitize URL parameters
  if (req.params && typeof req.params === 'object') {
    sanitizeObject(req.params);
  }

  next();
};

/**
 * Deep sanitization function
 */
const sanitizeObject = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      // Apply XSS protection
      obj[key] = xss(obj[key], {
        whiteList: {}, // No HTML tags allowed
        stripIgnoreTag: true, // Remove unknown tags
        stripIgnoreTagBody: ['script'], // Remove script tag contents
      });

      // Apply MongoDB injection protection
      obj[key] = mongoSanitize.sanitize(obj[key]);

      // Additional sanitization for common attack vectors
      obj[key] = obj[key]
        .replace(/[<>\"'&]/g, (match) => {
          const entities = {
            '<': '<',
            '>': '>',
            '"': '"',
            "'": "'",
            '&': '&',
          };
          return entities[match];
        })
        .trim()
        .substring(0, 10000); // Limit length to prevent DoS
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      sanitizeObject(obj[key]);
    }
  }
};

/**
 * Request size limiting middleware
 */
const createSizeLimiter = (options = {}) => {
  const {
    limit = '10mb',
    type = ['json', 'urlencoded', 'text'],
    message = 'Request entity too large',
    statusCode = 413,
  } = options;

  return (req, res, next) => {
    const contentLength = parseInt(req.get('content-length') || '0', 10);
    const maxBytes = parseBytes(limit);

    if (contentLength > maxBytes) {
      console.warn(
        `Request size limit exceeded: ${contentLength} bytes > ${maxBytes} bytes`
      );
      return res.status(statusCode).json({
        error: message,
        maxSize: limit,
        actualSize: `${contentLength} bytes`,
        timestamp: new Date().toISOString(),
      });
    }

    next();
  };
};

/**
 * Parse bytes from string (e.g., '10mb' -> 10485760)
 */
const parseBytes = (sizeStr) => {
  const match = sizeStr.match(/^(\d+(?:\.\d+)?)(b|kb|mb|gb|tb)$/i);
  if (!match) return parseInt(sizeStr, 10);

  const num = parseFloat(match[1]);
  const unit = match[2].toLowerCase();

  const multipliers = {
    b: 1,
    kb: 1024,
    mb: 1024 * 1024,
    gb: 1024 * 1024 * 1024,
    tb: 1024 * 1024 * 1024 * 1024,
  };

  return Math.floor(num * multipliers[unit]);
};

/**
 * Security headers middleware with dynamic CSP
 */
const createDynamicSecurityHeaders = () => (req, res, next) => {
  // Generate nonce for CSP
  const crypto = require('crypto');
  const nonce = crypto.randomBytes(16).toString('base64');

  // Set dynamic CSP based on route
  let cspDirective = "default-src 'self'";

  if (req.path.startsWith('/api/')) {
    cspDirective =
      "default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self' data:; style-src 'self'; font-src 'self'";
  } else {
    cspDirective = [
      "default-src 'self'",
      `'script-src 'self' 'nonce-${nonce}' 'unsafe-inline' 'unsafe-eval'`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https: blob:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://generativelanguage.googleapis.com",
      "frame-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ');
  }

  res.setHeader('Content-Security-Policy', cspDirective);
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  );
  res.setHeader(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );

  // Add nonce to response for use in templates
  res.locals.nonce = nonce;

  next();
};

/**
 * API key validation middleware
 */
const createAPIKeyValidator = () => (req, res, next) => {
  // Skip validation for public endpoints
  const publicEndpoints = ['/api/health', '/api/security/status', '/health'];
  const isPublic = publicEndpoints.some(
    (endpoint) => req.path === endpoint || req.originalUrl === endpoint
  );

  if (isPublic) {
    return next();
  }

  // Check for API key in headers
  const apiKey = req.get('X-API-Key') || req.get('Authorization');

  if (!apiKey) {
    return res.status(401).json({
      error: 'API key required',
      code: 'MISSING_API_KEY',
      message: 'Please provide a valid API key in the request headers',
      timestamp: new Date().toISOString(),
    });
  }

  // In production, validate against stored keys
  const expectedKey = process.env.API_KEY;
  if (expectedKey && apiKey !== expectedKey) {
    console.warn(`Invalid API key attempt: ${req.ip}`);
    return res.status(403).json({
      error: 'Invalid API key',
      code: 'INVALID_API_KEY',
      timestamp: new Date().toISOString(),
    });
  }

  next();
};

/**
 * Request logging middleware with security context
 */
const createSecurityLogger = () => (req, res, next) => {
  const startTime = Date.now();

  // Log request details
  const logData = {
    timestamp: new Date().toISOString(),
    method: req.method,
    path: req.path,
    ip: req.ip,
    userAgent: req.get('User-Agent'),
    referer: req.get('Referer'),
    contentType: req.get('Content-Type'),
    contentLength: req.get('Content-Length'),
    userId: req.user?.id || 'anonymous',
  };
  console.log('Request:', JSON.stringify(logData, null, 2));

  // Override res.end to log response
  const originalEnd = res.end;
  res.end = function (...args) {
    const duration = Date.now() - startTime;
    const responseLog = {
      ...logData,
      statusCode: res.statusCode,
      responseTime: `${duration}ms`,
      responseSize: res.get('Content-Length') || 'unknown',
    };

    console.log('Response:', JSON.stringify(responseLog, null, 2));
    originalEnd.apply(this, args);
  };

  next();
};

/**
 * Error handling middleware with security considerations
 */
const createSecurityErrorHandler = () => (err, req, res, next) => {
  // Log error details (without exposing sensitive information)
  console.error('Security Error:', {
    timestamp: new Date().toISOString(),
    path: req.path,
    method: req.method,
    ip: req.ip,
    userAgent: req.get('User-Agent'),
    error: err.message,
    stack: err.stack?.split('\n').slice(0, 5).join('\n'), // Limit stack trace
  });

  // Don't expose internal error details to client
  const statusCode = err.status || err.statusCode || 500;
  const message = statusCode === 500 ? 'Internal server error' : err.message;

  res.status(statusCode).json({
    error: message,
    code: err.code || 'INTERNAL_ERROR',
    timestamp: new Date().toISOString(),
    requestId:
      req.get('X-Request-ID') || Math.random().toString(36).substr(2, 9),
  });
};

module.exports = {
  createAdvancedRateLimiter,
  createInputValidation,
  createSizeLimiter,
  createDynamicSecurityHeaders,
  createAPIKeyValidator,
  createSecurityLogger,
  createSecurityErrorHandler,
};
