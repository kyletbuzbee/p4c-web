/**
 * Enterprise Security Proxy Server
 * Eliminates API key exposure by handling all sensitive operations server-side
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      connectSrc: ["'self'", "https://generativelanguage.googleapis.com"],
      frameSrc: ["'none'"],
      objectSrc: ["'none'"],
      baseUri: ["'self'"],
      formAction: ["'self'"],
      upgradeInsecureRequests: []
    },
  },
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.',
    retryAfter: 15 * 60 // 15 minutes in seconds
  },
  standardHeaders: true,
  legacyHeaders: false
});
app.use('/api/', limiter);

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
        '&': '&'
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

app.use(express.json({ limit: '10mb' }));
app.use(validateInput);

// Initialize Gemini AI (server-side only)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Middleware to verify API key presence
const verifyApiKey = (req, res, next) => {
  if (!process.env.GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY not configured');
    return res.status(500).json({ 
      error: 'Server configuration error',
      code: 'API_KEY_MISSING'
    });
  }
  next();
};

// Proxy endpoint for image editing
app.post('/api/ai/edit-image', verifyApiKey, async (req, res) => {
  try {
    const { base64Image, mimeType, prompt } = req.body;
    
    // Input validation
    if (!base64Image || !mimeType || !prompt) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        code: 'VALIDATION_ERROR',
        details: ['base64Image', 'mimeType', 'prompt']
      });
    }

    // Validate base64 format
    const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
    if (!base64Regex.test(base64Image)) {
      return res.status(400).json({ 
        error: 'Invalid image format',
        code: 'INVALID_IMAGE_FORMAT'
      });
    }

    // Validate MIME type
    const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedMimeTypes.includes(mimeType)) {
      return res.status(400).json({ 
        error: 'Unsupported image format',
        code: 'UNSUPPORTED_FORMAT',
        allowedFormats: allowedMimeTypes
      });
    }

    // Validate prompt length
    if (prompt.length > 1000) {
      return res.status(400).json({ 
        error: 'Prompt too long',
        code: 'PROMPT_TOO_LONG',
        maxLength: 1000
      });
    }

    console.log(`Processing image edit request from ${req.ip}`);

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-image' });
    
    const result = await model.generateContent({
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: mimeType,
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
        console.log('Image edit successful');
        return res.json({
          success: true,
          data: `data:image/png;base64,${part.inlineData.data}`,
          timestamp: new Date().toISOString()
        });
      }
    }

    console.warn('No image data returned from AI service');
    res.status(500).json({ 
      error: 'Failed to process image',
      code: 'PROCESSING_FAILED'
    });

  } catch (error) {
    console.error('Image edit proxy error:', error);
    
    // Don't expose internal error details
    res.status(500).json({ 
      error: 'Internal server error',
      code: 'INTERNAL_ERROR',
      timestamp: new Date().toISOString()
    });
  }
});

// Proxy endpoint for chat
app.post('/api/ai/chat', verifyApiKey, async (req, res) => {
  try {
    const { message, history } = req.body;
    
    // Input validation
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ 
        error: 'Message is required',
        code: 'VALIDATION_ERROR'
      });
    }

    if (message.length > 4000) {
      return res.status(400).json({ 
        error: 'Message too long',
        code: 'MESSAGE_TOO_LONG',
        maxLength: 4000
      });
    }

    console.log(`Processing chat request from ${req.ip}`);

    const model = genAI.getGenerativeModel({
      systemInstruction: `You are 'Patriot', the AI Concierge for Properties 4 Creations (P4C). 
      P4C is a veteran-owned company in East Texas that provides high-quality affordable housing.
      
      Key Information:
      - We accept Section 8, HUD-VASH, and Rapid Rehousing vouchers.
      - We prioritize veterans.
      - We use quartz countertops and LVP flooring (high quality).
      - We do NOT charge application fees.
      - Contact email: support@p4c-homes.com.
      - Location: Tyler, TX.
      
      Tone: Warm, professional, dignified, and helpful. Keep answers concise (under 3 sentences when possible).
      Do not make up specific property availability, just say check the 'Homes' page.`
    });

    const chat = model.startChat({
      history: Array.isArray(history) ? history : [],
    });

    const result = await chat.sendMessage(message);
    
    const response = result.response.text() || "I'm sorry, I couldn't process that request right now.";
    
    console.log('Chat response successful');
    res.json({
      success: true,
      message: response,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chat proxy error:', error);
    
    // Don't expose internal error details
    res.status(500).json({ 
      error: 'Failed to process chat request',
      code: 'CHAT_PROCESSING_FAILED',
      timestamp: new Date().toISOString()
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    services: {
      api: !!process.env.GEMINI_API_KEY,
      cors: true,
      security: true
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal server error',
    code: 'UNHANDLED_ERROR',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    code: 'NOT_FOUND',
    path: req.originalUrl,
    method: req.method
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Enterprise Security Proxy running on port ${PORT}`);
  console.log(`🔒 Security headers enabled`);
  console.log(`⚡ Rate limiting active (100 requests/15min)`);
  console.log(`🌍 CORS configured for: ${process.env.ALLOWED_ORIGINS || 'http://localhost:3000'}`);
  
  if (!process.env.GEMINI_API_KEY) {
    console.warn('⚠️  WARNING: GEMINI_API_KEY not configured in environment variables');
  }
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('🛑 SIGINT received, shutting down gracefully');
  process.exit(0);
});

module.exports = app;