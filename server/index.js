/**
 * Enterprise Security Proxy Server
 * Eliminates API key exposure by handling all sensitive operations server-side
 */

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const {
  createEnhancedSecurityHeadersMiddleware,
  applyEnhancedSecurityHeaders,
  handleCSPViolation,
  applyAPISecurityHeaders,
} = require('./middleware/enhancedSecurityHeaders');

// Import comprehensive security middleware
const {
  createAdvancedRateLimiter,
  createInputValidation,
  createSizeLimiter,
  createAPIKeyValidator,
  createSecurityLogger,
  createSecurityErrorHandler,
} = require('./middleware/comprehensiveSecurity');

// Import performance monitoring
const {
  createPerformanceMonitor,
  createPerformanceEndpoints,
} = require('./middleware/performanceMonitoring');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Constants
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 100;
const REQUEST_TIMEOUT_MS = 10000; // 10 seconds
const MAX_REQUEST_SIZE = '10mb';
const MAX_PROMPT_LENGTH = 1000;
const MAX_MESSAGE_LENGTH = 4000;

// Enhanced Security middleware
app.use(
  createEnhancedSecurityHeadersMiddleware({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: [
          "'self'",
          "'unsafe-inline'",
          'https://fonts.googleapis.com',
          'https://cdn.jsdelivr.net',
        ],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "'unsafe-eval'",
          'https://apis.google.com',
          'https://cdn.jsdelivr.net',
        ],
        imgSrc: [
          "'self'",
          'data:',
          'https:',
          'blob:',
          'https://*.googleusercontent.com',
        ],
        fontSrc: [
          "'self'",
          'https://fonts.gstatic.com',
          'https://cdn.jsdelivr.net',
        ],
        connectSrc: [
          "'self'",
          'https://generativelanguage.googleapis.com',
          'https://api.gemini.google.com',
          'https://abjscrezxkqrzwgmufzr.supabase.co',
          'https://*.supabase.co',
        ],
        frameSrc: ["'self'"],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'", 'https:', 'blob:'],
        workerSrc: ["'self'", 'blob:'],
        childSrc: ["'self'"],
        formAction: ["'self'"],
        frameAncestors: ["'none'"],
        baseUri: ["'self'"],
        manifestSrc: ["'self'"],
        reportUri: '/api/security/csp-violation',
      },
    },
  })
);

// Performance monitoring middleware
app.use(createPerformanceMonitor());

// Apply additional security headers for all routes
app.use(applyEnhancedSecurityHeaders);

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || [
      'http://localhost:3000',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  })
);

// Comprehensive security middleware
app.use(
  createAdvancedRateLimiter({
    windowMs: RATE_LIMIT_WINDOW_MS,
    max: RATE_LIMIT_MAX_REQUESTS,
    skipSuccessfulRequests: false,
    skipFailedRequests: false,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

// Input validation and sanitization
app.use(createInputValidation());

// Request size limiting
app.use(
  createSizeLimiter({
    limit: MAX_REQUEST_SIZE,
  })
);

// Security logging
app.use(createSecurityLogger());

// API key validation for protected endpoints
app.use('/api/', createAPIKeyValidator());

// Input validation middleware
const validateInput = (req, res, next) => {
  const sanitizeString = (str) => {
    if (typeof str !== 'string') return '';
    return str.replace(/[<>\"'&]/g, (match) => {
      const entities = {
        '<': '<',
        '>': '>',
        '"': '"',
        "'": '&#x27;',
        '&': '&',
      };
      return entities[match];
    });
  };

  // Sanitize request body
  if (req.body) {
    for (const key in req.body) {
      if (typeof req.body[key] === 'string') {
        req.body[key] = sanitizeString(req.body[key]);
      }
    }
  }

  next();
};

app.use(express.json({ limit: MAX_REQUEST_SIZE }));
app.use(validateInput);

// Initialize Botpress configuration
// Botpress API configuration - using provided API key
const BOTPRESS_API_URL =
  process.env.BOTPRESS_API_URL || 'https://api.botpress.cloud';
const BOTPRESS_API_KEY =
  process.env.BOTPRESS_API_KEY || 'bp_bak_Vr4mQVS58PvsNUvx1VZXp4BBblxiBfCqDN0g';
const BOTPRESS_BOT_ID = process.env.BOTPRESS_BOT_ID || 'your-bot-id'; // You'll need to get this from your Botpress dashboard

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Initialize axios for Botpress API calls
const botpressClient = axios.create({
  baseURL: BOTPRESS_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${BOTPRESS_API_KEY}`,
  },
});

// Middleware to verify API key presence
const verifyApiKey = (req, res, next) => {
  if (!process.env.GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY not configured');
    return res.status(500).json({
      error: 'Server configuration error',
      code: 'API_KEY_MISSING',
    });
  }
  next();
};

// CSP violation reporting endpoint
app.post('/api/security/csp-violation', handleCSPViolation);

// Performance monitoring endpoints
createPerformanceEndpoints(app);

// Apply API-specific security headers for all API routes
app.use('/api/', applyAPISecurityHeaders);

// Proxy endpoint for image editing
app.post('/api/ai/edit-image', verifyApiKey, async (req, res) => {
  try {
    const { base64Image, mimeType, prompt } = req.body;

    // Input validation
    if (!base64Image || !mimeType || !prompt) {
      return res.status(400).json({
        error: 'Missing required fields',
        code: 'VALIDATION_ERROR',
        details: ['base64Image', 'mimeType', 'prompt'],
      });
    }

    // Validate base64 format
    const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
    if (!base64Regex.test(base64Image)) {
      return res.status(400).json({
        error: 'Invalid image format',
        code: 'INVALID_IMAGE_FORMAT',
      });
    }

    // Validate MIME type
    const allowedMimeTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/webp',
    ];
    if (!allowedMimeTypes.includes(mimeType)) {
      return res.status(400).json({
        error: 'Unsupported image format',
        code: 'UNSUPPORTED_FORMAT',
        allowedFormats: allowedMimeTypes,
      });
    }

    // Validate prompt length
    if (prompt.length > MAX_PROMPT_LENGTH) {
      return res.status(400).json({
        error: 'Prompt too long',
        code: 'PROMPT_TOO_LONG',
        maxLength: MAX_PROMPT_LENGTH,
      });
    }
    const model = genAI.getGenerativeModel({ model: 'gemini-pro-3' });

    const result = await model.generateContent({
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType,
            },
          },
          {
            text: `Edit this image: ${prompt}. Return only the visual result.`,
          },
        ],
      },
    });

    for (const part of result.response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return res.json({
          success: true,
          data: `data:image/png;base64,${part.inlineData.data}`,
          timestamp: new Date().toISOString(),
        });
      }
    }

    console.warn('No image data returned from AI service');
    res.status(500).json({
      error: 'Failed to process image',
      code: 'PROCESSING_FAILED',
    });
  } catch (error) {
    console.error('Image edit proxy error:', error);

    // Don't expose internal error details
    res.status(500).json({
      error: 'Internal server error',
      code: 'INTERNAL_ERROR',
      timestamp: new Date().toISOString(),
    });
  }
});

// Proxy endpoint for chat (now using Botpress)
app.post('/api/ai/chat', verifyApiKey, async (req, res) => {
  try {
    const { message } = req.body;

    // Input validation
    if (!message || typeof message !== 'string') {
      return res.status(400).json({
        error: 'Message is required',
        code: 'VALIDATION_ERROR',
      });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({
        error: 'Message too long',
        code: 'MESSAGE_TOO_LONG',
        maxLength: MAX_MESSAGE_LENGTH,
      });
    }

    // Validate Botpress configuration
    if (!BOTPRESS_API_URL || !BOTPRESS_API_KEY || !BOTPRESS_BOT_ID) {
      console.error(
        'Botpress configuration incomplete - falling back to static response'
      );
      return res.json({
        success: true,
        message:
          "I'm sorry, our AI assistant is temporarily unavailable. Please try again later or contact our support team at (903) 555-HELP for immediate assistance with finding your home.",
        timestamp: new Date().toISOString(),
      });
    }

    try {
      // Call Botpress API with timeout
      const botpressResponse = await Promise.race([
        botpressClient.post(`/api/v1/bots/${BOTPRESS_BOT_ID}/converse`, {
          type: 'text',
          text: message,
          // Botpress handles conversation context differently than Gemini
          // For now, we'll start a new conversation each time
          // In a production environment, you'd want to maintain session/thread ID
        }),
        // Timeout after configured duration
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Botpress timeout')), REQUEST_TIMEOUT_MS)
        ),
      ]);

      // Extract the Botpress response
      const botpressData = botpressResponse.data;

      // Botpress response structure may vary based on version and configuration
      // This is a basic mapping - you may need to adjust based on your Botpress setup
      let botResponse = "I'm sorry, I couldn't process that request right now.";

      if (
        botpressData &&
        botpressData.responses &&
        botpressData.responses.length > 0
      ) {
        // Find the first text response
        const textResponse = botpressData.responses.find(
          (r) => r.type === 'text'
        );
        if (textResponse && textResponse.text) {
          botResponse = textResponse.text;
        }
      }

      res.json({
        success: true,
        message: botResponse,
        timestamp: new Date().toISOString(),
      });
    } catch (botpressError) {
      console.error('Botpress API error:', botpressError);

      // Graceful fallback responses based on user intent
      let fallbackMessage =
        "I'm sorry, our AI assistant is temporarily unavailable. Please try again later or contact our support team at (903) 555-HELP.";

      const lowerMessage = message.toLowerCase();
      if (
        lowerMessage.includes('rent') ||
        lowerMessage.includes('home') ||
        lowerMessage.includes('housing')
      ) {
        fallbackMessage =
          "I'd be happy to help you find housing! Our AI assistant is temporarily unavailable. Please visit our website at properties4creation.com to browse available homes or call (903) 555-HELP for immediate assistance.";
      } else if (
        lowerMessage.includes('sell') ||
        lowerMessage.includes('house') ||
        lowerMessage.includes('property')
      ) {
        fallbackMessage =
          'We buy houses in any condition! Our AI assistant is temporarily unavailable. Please visit properties4creation.com/homeowner-solutions or call (903) 555-SELL for a quick cash offer.';
      } else if (
        lowerMessage.includes('veteran') ||
        lowerMessage.includes('vash') ||
        lowerMessage.includes('service')
      ) {
        fallbackMessage =
          'We proudly serve veterans with specialized housing programs. Our AI assistant is temporarily unavailable. Please visit properties4creation.com/veterans or call (903) 555-VETS for veteran services.';
      }

      // Handle specific Botpress errors with appropriate HTTP status
      if (botpressError.response) {
        // Botpress returned an error response
        console.error('Botpress error response:', botpressError.response.data);
        res.status(botpressError.response.status || 500).json({
          error: 'Botpress service error',
          code: 'BOTPRESS_SERVICE_ERROR',
          details: botpressError.response.data,
          timestamp: new Date().toISOString(),
        });
      } else if (botpressError.request) {
        // Request was made but no response received - use fallback
        res.json({
          success: true,
          message: fallbackMessage,
          timestamp: new Date().toISOString(),
        });
      } else {
        // Something happened in setting up the request - use fallback
        res.json({
          success: true,
          message: fallbackMessage,
          timestamp: new Date().toISOString(),
        });
      }
    }
  } catch (error) {
    console.error('Chat proxy error:', error);

    // Ultimate fallback - don't expose internal error details
    res.json({
      success: true,
      message:
        "I'm sorry, our AI assistant is temporarily unavailable. Please try again later or contact our support team at (903) 555-HELP for immediate assistance with finding your home.",
      timestamp: new Date().toISOString(),
    });
  }
});

// Health check endpoint (updated for Botpress)
app.get('/api/health', async (req, res) => {
  try {
    // Check Botpress configuration
    const botpressConfigured = !!(
      BOTPRESS_API_URL &&
      BOTPRESS_API_KEY &&
      BOTPRESS_BOT_ID
    );

    // Try to ping Botpress if configured
    let botpressHealthy = false;
    if (botpressConfigured) {
      try {
        await botpressClient.get('/api/health');
        botpressHealthy = true;
      } catch (error) {
        console.warn('Botpress health check failed:', error.message);
        botpressHealthy = false;
      }
    }

    res.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      services: {
        api: botpressConfigured,
        botpress: botpressHealthy,
        cors: true,
        security: true,
      },
    });
  } catch (error) {
    console.error('Health check error:', error);
    res.status(500).json({
      status: 'unhealthy',
      error: 'Health check failed',
      timestamp: new Date().toISOString(),
    });
  }
});

// Comprehensive security error handling
app.use(createSecurityErrorHandler());

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    code: 'NOT_FOUND',
    path: req.originalUrl,
    method: req.method,
  });
});

app.listen(PORT, () => {
  if (!process.env.GEMINI_API_KEY) {
    console.warn(
      '⚠️  WARNING: GEMINI_API_KEY not configured in environment variables'
    );
  }
});

// Graceful shutdown
process.on('SIGTERM', () => {
  process.exit(0);
});

process.on('SIGINT', () => {
  process.exit(0);
});

module.exports = app;
