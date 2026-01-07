const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');
const { body, param, query, validationResult } = require('express-validator');
const crypto = require('crypto');
const { logSecurityEvent } = require('./logging');

// Rate limiting configurations
const createRateLimiter = (options = {}) =>
  rateLimit({
    windowMs: options.windowMs || 15 * 60 * 1000, // 15 minutes
    max: options.max || 100, // limit each IP to 100 requests per windowMs
    message: {
      error: 'Too many requests',
      retryAfter: options.windowMs || 900000,
    },
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      logSecurityEvent(
        'rate_limit_exceeded',
        'medium',
        'Rate limit exceeded',
        req,
        {
          ip: req.ip,
          attempts: req.rateLimit?.totalHits || 0,
        }
      );
      res.status(429).json({
        error: 'Too many requests',
        retryAfter: req.rateLimit?.resetTime,
      });
    },
    skip: (req) =>
      // Skip rate limiting for health checks
      req.path === '/health' || req.path === '/metrics',
  });

// Stricter rate limiter for authentication endpoints
const authRateLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window
  message: 'Too many authentication attempts',
});

// General API rate limiter
const apiRateLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

// Upload rate limiter (stricter for file uploads)
const uploadRateLimiter = createRateLimiter({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // 10 uploads per hour
});

// Speed limiter to slow down repeated requests
const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 50, // allow 50 requests per 15 minutes at full speed
  delayMs: 500, // add 500ms delay per request after delayAfter
});

// Request validation rules
const validate = {
  // User validation
  createUser: [
    body('email')
      .isEmail()
      .normalizeEmail()
      .isLength({ max: 255 })
      .withMessage('Valid email is required'),
    body('password')
      .isLength({ min: 8, max: 128 })
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
      )
      .withMessage(
        'Password must be 8-128 characters with uppercase, lowercase, number, and special character'
      ),
    body('firstName')
      .trim()
      .isLength({ min: 1, max: 50 })
      .matches(/^[a-zA-Z\s]+$/)
      .withMessage(
        'First name must contain only letters and be 1-50 characters'
      ),
    body('lastName')
      .trim()
      .isLength({ min: 1, max: 50 })
      .matches(/^[a-zA-Z\s]+$/)
      .withMessage(
        'Last name must contain only letters and be 1-50 characters'
      ),
    body('phone')
      .optional()
      .isMobilePhone('any')
      .withMessage('Valid phone number is required'),
    body('role')
      .isIn(['tenant', 'landlord', 'admin'])
      .withMessage('Role must be tenant, landlord, or admin'),
  ],

  // Property validation
  createProperty: [
    body('title')
      .trim()
      .isLength({ min: 1, max: 200 })
      .withMessage('Title is required and must be less than 200 characters'),
    body('description')
      .trim()
      .isLength({ min: 1, max: 2000 })
      .withMessage(
        'Description is required and must be less than 2000 characters'
      ),
    body('address.street')
      .trim()
      .isLength({ min: 1, max: 100 })
      .withMessage('Street address is required'),
    body('address.city')
      .trim()
      .isLength({ min: 1, max: 50 })
      .matches(/^[a-zA-Z\s]+$/)
      .withMessage('City must contain only letters'),
    body('address.state')
      .trim()
      .isLength({ min: 2, max: 2 })
      .matches(/^[A-Z]{2}$/)
      .withMessage('State must be 2-letter code'),
    body('address.zipCode')
      .trim()
      .isPostalCode('US')
      .withMessage('Valid ZIP code is required'),
    body('price')
      .isFloat({ min: 0 })
      .withMessage('Price must be a positive number'),
    body('bedrooms')
      .isInt({ min: 0, max: 20 })
      .withMessage('Bedrooms must be between 0 and 20'),
    body('bathrooms')
      .isFloat({ min: 0, max: 20 })
      .withMessage('Bathrooms must be between 0 and 20'),
    body('squareFeet')
      .isInt({ min: 1, max: 50000 })
      .withMessage('Square feet must be between 1 and 50000'),
    body('propertyType')
      .isIn(['apartment', 'house', 'condo', 'townhouse', 'studio'])
      .withMessage('Invalid property type'),
  ],

  // Query validation
  validateQuery: [
    query('page')
      .optional()
      .isInt({ min: 1, max: 1000 })
      .withMessage('Page must be between 1 and 1000'),
    query('limit')
      .optional()
      .isInt({ min: 1, max: 100 })
      .withMessage('Limit must be between 1 and 100'),
    query('sortBy')
      .optional()
      .isIn(['price', 'createdAt', 'updatedAt', 'title'])
      .withMessage('Invalid sort field'),
    query('sortOrder')
      .optional()
      .isIn(['asc', 'desc'])
      .withMessage('Sort order must be asc or desc'),
  ],

  // Parameter validation
  validateId: [param('id').isUUID().withMessage('Valid UUID is required')],

  // Contact form validation
  contactForm: [
    body('name')
      .trim()
      .isLength({ min: 1, max: 100 })
      .matches(/^[a-zA-Z\s]+$/)
      .withMessage('Name must contain only letters and be 1-100 characters'),
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Valid email is required'),
    body('phone')
      .optional()
      .isMobilePhone('any')
      .withMessage('Valid phone number is required'),
    body('subject')
      .trim()
      .isLength({ min: 1, max: 200 })
      .withMessage('Subject is required and must be less than 200 characters'),
    body('message')
      .trim()
      .isLength({ min: 1, max: 2000 })
      .withMessage('Message is required and must be less than 2000 characters'),
  ],
};

// Request sanitization middleware
const sanitizeRequest = (req, res, next) => {
  // Remove potentially dangerous characters
  const sanitizeString = (str) => {
    if (typeof str !== 'string') return str;
    return str
      .replace(
        /<(?:script|iframe|object|embed|form|link|meta|base|input|textarea|select|button)[\s\S]*?<\/(?:script|iframe|object|embed|form|link|meta|base|input|textarea|select|button)>/gi,
        ''
      ) // Remove dangerous HTML tags
      .replace(
        /<[^>]*(?:on\w+|href|src|data|action|formaction|style)[^>]*>/gi,
        ''
      ) // Remove event handlers and dangerous attributes
      .replace(/(?:javascript|vbscript|data|file|ftp):/gi, '') // Remove dangerous protocols
      .replace(/[\r\n\t]+/g, ' ') // Normalize whitespace
      .replace(/\s+/g, ' ') // Collapse multiple spaces
      .trim();
  };

  // Sanitize request body
  if (req.body && typeof req.body === 'object') {
    req.body = sanitizeObject(req.body, sanitizeString);
  }

  // Sanitize query parameters
  if (req.query && typeof req.query === 'object') {
    req.query = sanitizeObject(req.query, sanitizeString);
  }

  next();
};

const sanitizeObject = (obj, sanitizeFn) => {
  if (Array.isArray(obj)) {
    return obj.map((item) => sanitizeObject(item, sanitizeFn));
  }

  if (obj && typeof obj === 'object') {
    const sanitized = {};
    for (const [key, value] of Object.entries(obj)) {
      sanitized[key] = sanitizeObject(value, sanitizeFn);
    }
    return sanitized;
  }

  return typeof obj === 'string' ? sanitizeFn(obj) : obj;
};

// SQL injection prevention
const preventSQLInjection = (req, res, next) => {
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|SCRIPT)\b)/gi,
    /('|(\\x27)|(\\x2D)|(\\x2D)|(\\x23)|(\\x3A))/gi,
    /(\b(OR|AND)\b\s*['"]?\d+['"]?\s*=\s*['"]?\d+['"]?)/gi,
    /(\b(OR|AND)\b\s*['"]?\w+['"]?\s*=\s*['"]?\w+['"]?)/gi,
    /https?:\/\/[^\/]*@/gi, // URL scheme validation - prevent user:pass@host
    /file:\/\//gi, // Block file:// protocol
    /data:\/\//gi, // Block data: protocol
  ];

  const checkForSQL = (obj) => {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'string') {
        for (const pattern of sqlPatterns) {
          if (pattern.test(value)) {
            logSecurityEvent(
              'sql_injection_attempt',
              'high',
              'SQL injection attempt detected',
              req,
              {
                key,
                value,
                pattern: pattern.source,
              }
            );
            return true;
          }
        }
      }
      if (typeof value === 'object' && value !== null) {
        if (checkForSQL(value)) return true;
      }
    }
    return false;
  };

  if (checkForSQL(req.body) || checkForSQL(req.query)) {
    return res.status(400).json({
      error: 'Invalid input detected',
    });
  }

  next();
};

// File upload validation
const validateFileUpload = (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return next();
  }

  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
  const maxSize = 5 * 1024 * 1024; // 5MB

  for (const fieldName in req.files) {
    const file = req.files[fieldName];
    const files = Array.isArray(file) ? file : [file];

    for (const uploadedFile of files) {
      if (!allowedTypes.includes(uploadedFile.mimetype)) {
        logSecurityEvent(
          'invalid_file_type',
          'medium',
          'Invalid file type uploaded',
          req,
          {
            fieldName,
            mimetype: uploadedFile.mimetype,
            filename: uploadedFile.name,
          }
        );
        return res.status(400).json({
          error: `Invalid file type. Allowed types: ${allowedTypes.join(', ')}`,
        });
      }

      if (uploadedFile.size > maxSize) {
        logSecurityEvent('file_too_large', 'medium', 'File too large', req, {
          fieldName,
          size: uploadedFile.size,
          maxSize,
        });
        return res.status(400).json({
          error: `File too large. Maximum size: ${maxSize / 1024 / 1024}MB`,
        });
      }
    }
  }

  next();
};

// XSS prevention
const preventXSS = (req, res, next) => {
  const xssPatterns = [
    /<(?:script|iframe|object|embed|form|link|meta|base|input|textarea|select|button)[\s\S]*?<\/(?:script|iframe|object|embed|form|link|meta|base|input|textarea|select|button)>/gi,
    /<[^>]*(?:on\w+|href|src|data|action|formaction|style)[^>]*>/gi,
    /(?:javascript|vbscript|data|file|ftp):/gi,
    /[\r\n\t]+/g,
    /<[^>]*>/g,
  ];

  const checkForXSS = (obj) => {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'string') {
        for (const pattern of xssPatterns) {
          if (pattern.test(value)) {
            logSecurityEvent(
              'xss_attempt',
              'high',
              'XSS attempt detected',
              req,
              {
                key,
                value: value.substring(0, 100), // Log first 100 chars
                pattern: pattern.source,
              }
            );
            return true;
          }
        }
      }
      if (typeof value === 'object' && value !== null) {
        if (checkForXSS(value)) return true;
      }
    }
    return false;
  };

  if (checkForXSS(req.body) || checkForXSS(req.query)) {
    return res.status(400).json({
      error: 'Potentially dangerous content detected',
    });
  }

  next();
};

// Request size validation
const validateRequestSize = (req, res, next) => {
  const contentLength = req.headers['content-length'];
  const maxSize = 10 * 1024 * 1024; // 10MB

  if (contentLength && parseInt(contentLength) > maxSize) {
    logSecurityEvent('request_too_large', 'medium', 'Request too large', req, {
      contentLength,
      maxSize,
    });
    return res.status(413).json({
      error: 'Request payload too large',
    });
  }

  next();
};

// Validation error handler
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logSecurityEvent(
      'validation_error',
      'low',
      'Request validation failed',
      req,
      {
        errors: errors.array(),
      }
    );
    return res.status(400).json({
      error: 'Validation failed',
      details: errors.array(),
    });
  }
  next();
};

module.exports = {
  createRateLimiter,
  authRateLimiter,
  apiRateLimiter,
  uploadRateLimiter,
  speedLimiter,
  validate,
  sanitizeRequest,
  preventSQLInjection,
  validateFileUpload,
  preventXSS,
  validateRequestSize,
  handleValidationErrors,
};
