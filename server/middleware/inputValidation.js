const { body, param, query, validationResult } = require('express-validator');

// Custom validators for enhanced security
const customValidators = {
  // Sanitize HTML to prevent XSS
  sanitizeHTML: (value) => {
    if (typeof value !== 'string') return value;
    
    // Remove dangerous HTML tags and attributes
    return value
      .replace(/<(?:script|iframe|object|embed|form|link|meta|base|input|textarea|select|button)[\s\S]*?<\/(?:script|iframe|object|embed|form|link|meta|base|input|textarea|select|button)>/gi, '')
      .replace(/<[^>]*(?:on\w+|href|src|data|action|formaction|style)[^>]*>/gi, '')
      .replace(/(?:javascript|vbscript|data|file|ftp):/gi, '')
      .replace(/[\r\n\t]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  },

  // Validate and sanitize email
  isSecureEmail: (value) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    if (!emailRegex.test(value)) {
      throw new Error('Invalid email format');
    }
    
    // Convert to lowercase and trim
    return value.toLowerCase().trim();
  },

  // Validate password strength
  isStrongPassword: (value) => {
    const minLength = 12;
    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
    const hasNoSpaces = !/\s/.test(value);
    
    if (value.length < minLength) {
      throw new Error(`Password must be at least ${minLength} characters long`);
    }
    
    if (!hasUpper) {
      throw new Error('Password must contain at least one uppercase letter');
    }
    
    if (!hasLower) {
      throw new Error('Password must contain at least one lowercase letter');
    }
    
    if (!hasNumber) {
      throw new Error('Password must contain at least one number');
    }
    
    if (!hasSpecial) {
      throw new Error('Password must contain at least one special character');
    }
    
    if (!hasNoSpaces) {
      throw new Error('Password cannot contain spaces');
    }
    
    // Check for common patterns
    const commonPatterns = [
      /123456/,
      /password/i,
      /qwerty/i,
      /abc123/i,
      /password123/i
    ];
    
    if (commonPatterns.some(pattern => pattern.test(value))) {
      throw new Error('Password contains common patterns and is not secure');
    }
    
    return value;
  },

  // Validate and sanitize phone number
  isSecurePhone: (value) => {
    if (!value) return value;
    
    // Remove all non-digits
    const cleaned = value.replace(/\D/g, '');
    
    // Check if it's a valid US phone number (10 or 11 digits)
    if (cleaned.length === 10) {
      return cleaned;
    } else if (cleaned.length === 11 && cleaned.startsWith('1')) {
      return cleaned;
    } else {
      throw new Error('Invalid phone number format');
    }
  },

  // Validate and sanitize ZIP code
  isSecureZipCode: (value) => {
    if (!value) return value;
    
    const zipRegex = /^\d{5}(-\d{4})?$/;
    if (!zipRegex.test(value)) {
      throw new Error('Invalid ZIP code format');
    }
    
    return value.toUpperCase();
  },

  // Sanitize filename to prevent path traversal
  sanitizeFilename: (value) => {
    if (!value) return value;
    
    return value
      .replace(/[^\w\-_.]/g, '') // Remove special characters except underscore, hyphen, period
      .replace(/\.\./g, '') // Remove double dots
      .substring(0, 255); // Limit length
  },

  // Validate file size (in bytes)
  isValidFileSize: (maxSize) => {
    return (value) => {
      if (value && value.size > maxSize) {
        throw new Error(`File size exceeds maximum limit of ${maxSize} bytes`);
      }
      return true;
    };
  },

  // Validate file type
  isValidFileType: (allowedTypes) => {
    return (value) => {
      if (value && !allowedTypes.includes(value.mimetype)) {
        throw new Error(`File type ${value.mimetype} is not allowed`);
      }
      return true;
    };
  }
};

// Validation middleware factory
const createValidationMiddleware = (validations) => {
  return async (req, res, next) => {
    try {
      await Promise.all(validations.map(validation => validation.run(req)));
      
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          error: 'Validation failed',
          details: errors.array().map(err => ({
            field: err.param,
            message: err.msg,
            value: err.value
          }))
        });
      }
      
      next();
    } catch (error) {
      console.error('Validation middleware error:', error);
      res.status(500).json({
        success: false,
        error: 'Validation system error'
      });
    }
  };
};

// Common validation schemas
const schemas = {
  // User registration
  userRegistration: [
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Valid email is required'),
    body('password')
      .custom(customValidators.isStrongPassword)
      .withMessage('Password does not meet security requirements'),
    body('firstName')
      .trim()
      .isLength({ min: 1, max: 50 })
      .matches(/^[a-zA-Z\s'-]+$/)
      .withMessage('First name must be 1-50 characters and contain only letters, spaces, hyphens, and apostrophes'),
    body('lastName')
      .trim()
      .isLength({ min: 1, max: 50 })
      .matches(/^[a-zA-Z\s'-]+$/)
      .withMessage('Last name must be 1-50 characters and contain only letters, spaces, hyphens, and apostrophes'),
    body('phone')
      .optional()
      .custom(customValidators.isSecurePhone)
      .withMessage('Invalid phone number format')
  ],

  // User login
  userLogin: [
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Valid email is required'),
    body('password')
      .isLength({ min: 1 })
      .withMessage('Password is required')
  ],

  // Property search
  propertySearch: [
    query('location')
      .optional()
      .trim()
      .isLength({ max: 100 })
      .withMessage('Location must be less than 100 characters'),
    query('minPrice')
      .optional()
      .isInt({ min: 0, max: 10000000 })
      .withMessage('Minimum price must be between 0 and 10,000,000'),
    query('maxPrice')
      .optional()
      .isInt({ min: 0, max: 10000000 })
      .withMessage('Maximum price must be between 0 and 10,000,000'),
    query('bedrooms')
      .optional()
      .isInt({ min: 0, max: 20 })
      .withMessage('Bedrooms must be between 0 and 20'),
    query('bathrooms')
      .optional()
      .isFloat({ min: 0, max: 20 })
      .withMessage('Bathrooms must be between 0 and 20'),
    query('propertyType')
      .optional()
      .isIn(['apartment', 'house', 'condo', 'townhouse', 'studio'])
      .withMessage('Invalid property type'),
    query('page')
      .optional()
      .isInt({ min: 1, max: 1000 })
      .withMessage('Page must be between 1 and 1000'),
    query('limit')
      .optional()
      .isInt({ min: 1, max: 100 })
      .withMessage('Limit must be between 1 and 100')
  ],

  // Property ID parameter
  propertyId: [
    param('id')
      .isInt({ min: 1 })
      .withMessage('Property ID must be a positive integer')
  ],

  // Contact form
  contactForm: [
    body('name')
      .trim()
      .isLength({ min: 1, max: 100 })
      .matches(/^[a-zA-Z\s'-]+$/)
      .withMessage('Name must be 1-100 characters and contain only letters, spaces, hyphens, and apostrophes'),
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Valid email is required'),
    body('phone')
      .optional()
      .custom(customValidators.isSecurePhone)
      .withMessage('Invalid phone number format'),
    body('subject')
      .trim()
      .isLength({ min: 1, max: 200 })
      .withMessage('Subject must be 1-200 characters'),
    body('message')
      .trim()
      .isLength({ min: 10, max: 2000 })
      .custom(customValidators.sanitizeHTML)
      .withMessage('Message must be 10-2000 characters'),
    body('propertyId')
      .optional()
      .isInt({ min: 1 })
      .withMessage('Property ID must be a positive integer')
  ],

  // Application form
  applicationForm: [
    body('applicant.firstName')
      .trim()
      .isLength({ min: 1, max: 50 })
      .matches(/^[a-zA-Z\s'-]+$/)
      .withMessage('First name is required and must be valid'),
    body('applicant.lastName')
      .trim()
      .isLength({ min: 1, max: 50 })
      .matches(/^[a-zA-Z\s'-]+$/)
      .withMessage('Last name is required and must be valid'),
    body('applicant.email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Valid email is required'),
    body('applicant.phone')
      .optional()
      .custom(customValidators.isSecurePhone)
      .withMessage('Invalid phone number format'),
    body('applicant.dateOfBirth')
      .isISO8601()
      .withMessage('Valid date of birth is required'),
    body('applicant.ssn')
      .optional()
      .matches(/^\d{3}-?\d{2}-?\d{4}$/)
      .withMessage('Invalid SSN format'),
    body('employment.employer')
      .optional()
      .trim()
      .isLength({ max: 100 })
      .withMessage('Employer name must be less than 100 characters'),
    body('employment.position')
      .optional()
      .trim()
      .isLength({ max: 100 })
      .withMessage('Position must be less than 100 characters'),
    body('employment.monthlyIncome')
      .optional()
      .isInt({ min: 0, max: 1000000 })
      .withMessage('Monthly income must be between 0 and 1,000,000'),
    body('references[0].name')
      .optional()
      .trim()
      .isLength({ min: 1, max: 100 })
      .withMessage('Reference name must be 1-100 characters'),
    body('references[0].phone')
      .optional()
      .custom(customValidators.isSecurePhone)
      .withMessage('Invalid reference phone number'),
    body('references[0].relationship')
      .optional()
      .trim()
      .isLength({ max: 50 })
      .withMessage('Relationship must be less than 50 characters')
  ],

  // File upload
  fileUpload: [
    body('fileName')
      .custom(customValidators.sanitizeFilename)
      .withMessage('Invalid file name'),
    body('fileSize')
      .isInt({ min: 1, max: 10 * 1024 * 1024 }) // 10MB max
      .withMessage('File size must be between 1 byte and 10MB')
  ],

  // Newsletter subscription
  newsletterSubscription: [
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Valid email is required'),
    body('preferences')
      .optional()
      .isArray()
      .withMessage('Preferences must be an array'),
    body('preferences.*')
      .optional()
      .isIn(['property-updates', 'market-insights', 'community-events'])
      .withMessage('Invalid preference value')
  ],

  // Admin user management
  adminUserUpdate: [
    body('email')
      .optional()
      .isEmail()
      .normalizeEmail()
      .withMessage('Valid email is required'),
    body('firstName')
      .optional()
      .trim()
      .isLength({ min: 1, max: 50 })
      .matches(/^[a-zA-Z\s'-]+$/)
      .withMessage('First name must be valid'),
    body('lastName')
      .optional()
      .trim()
      .isLength({ min: 1, max: 50 })
      .matches(/^[a-zA-Z\s'-]+$/)
      .withMessage('Last name must be valid'),
    body('role')
      .optional()
      .isIn(['user', 'admin', 'moderator'])
      .withMessage('Invalid role'),
    body('isActive')
      .optional()
      .isBoolean()
      .withMessage('isActive must be a boolean')
  ],

  // Property creation/update
  propertyManagement: [
    body('title')
      .trim()
      .isLength({ min: 1, max: 200 })
      .withMessage('Title is required and must be less than 200 characters'),
    body('description')
      .trim()
      .isLength({ min: 10, max: 2000 })
      .custom(customValidators.sanitizeHTML)
      .withMessage('Description must be 10-2000 characters'),
    body('address.street')
      .trim()
      .isLength({ min: 1, max: 100 })
      .withMessage('Street address is required'),
    body('address.city')
      .trim()
      .isLength({ min: 1, max: 50 })
      .matches(/^[a-zA-Z\s'-]+$/)
      .withMessage('City must be valid'),
    body('address.state')
      .trim()
      .isLength({ min: 2, max: 2 })
      .matches(/^[A-Z]{2}$/)
      .withMessage('State must be a 2-letter code'),
    body('address.zipCode')
      .custom(customValidators.isSecureZipCode)
      .withMessage('Invalid ZIP code'),
    body('price')
      .isInt({ min: 1, max: 10000000 })
      .withMessage('Price must be between 1 and 10,000,000'),
    body('bedrooms')
      .isInt({ min: 0, max: 20 })
      .withMessage('Bedrooms must be between 0 and 20'),
    body('bathrooms')
      .isFloat({ min: 0, max: 20 })
      .withMessage('Bathrooms must be between 0 and 20'),
    body('squareFeet')
      .optional()
      .isInt({ min: 1, max: 50000 })
      .withMessage('Square feet must be between 1 and 50,000'),
    body('propertyType')
      .isIn(['apartment', 'house', 'condo', 'townhouse', 'studio'])
      .withMessage('Invalid property type'),
    body('amenities')
      .optional()
      .isArray()
      .withMessage('Amenities must be an array'),
    body('amenities.*')
      .optional()
      .trim()
      .isLength({ max: 50 })
      .withMessage('Each amenity must be less than 50 characters')
  ]
};

// Sanitization middleware
const sanitizeInput = (req, res, next) => {
  const sanitizeObject = (obj) => {
    if (typeof obj === 'string') {
      return customValidators.sanitizeHTML(obj);
    }
    
    if (Array.isArray(obj)) {
      return obj.map(sanitizeObject);
    }
    
    if (obj && typeof obj === 'object') {
      const sanitized = {};
      for (const [key, value] of Object.entries(obj)) {
        // Only allow alphanumeric, underscore, hyphen keys
        if (/^[a-zA-Z0-9_-]+$/.test(key)) {
          sanitized[key] = sanitizeObject(value);
        }
      }
      return sanitized;
    }
    
    return obj;
  };

  try {
    if (req.body) {
      req.body = sanitizeObject(req.body);
    }
    
    if (req.query) {
      req.query = sanitizeObject(req.query);
    }
    
    if (req.params) {
      req.params = sanitizeObject(req.params);
    }
    
    next();
  } catch (error) {
    console.error('Sanitization error:', error);
    res.status(500).json({
      success: false,
      error: 'Input sanitization failed'
    });
  }
};

// Rate limiting for validation endpoints
const validationRateLimit = (req, res, next) => {
  // Simple in-memory rate limiting (in production, use Redis)
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 100; // per window
  
  if (!req.rateLimit) {
    req.rateLimit = {
      count: 1,
      resetTime: now + windowMs
    };
  } else {
    if (now > req.rateLimit.resetTime) {
      req.rateLimit = {
        count: 1,
        resetTime: now + windowMs
      };
    } else {
      req.rateLimit.count++;
    }
  }
  
  if (req.rateLimit.count > maxRequests) {
    return res.status(429).json({
      success: false,
      error: 'Too many validation requests',
      retryAfter: Math.ceil((req.rateLimit.resetTime - now) / 1000)
    });
  }
  
  next();
};

module.exports = {
  schemas,
  createValidationMiddleware,
  sanitizeInput,
  validationRateLimit,
  customValidators
};