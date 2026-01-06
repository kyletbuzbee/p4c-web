const winston = require('winston');
const path = require('path');

// Custom log format
const logFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.json(),
  winston.format.printf(({ timestamp, level, message, stack, ...meta }) => {
    let log = `${timestamp} [${level.toUpperCase()}]: ${message}`;
    if (stack) {
      log += `\n${stack}`;
    }
    if (Object.keys(meta).length > 0) {
      log += `\n${JSON.stringify(meta, null, 2)}`;
    }
    return log;
  }),
);

// Create logger instance
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: logFormat,
  defaultMeta: {
    service: 'properties-website',
    version: process.env.npm_package_version || '1.0.0',
  },
  transports: [
    // Console transport
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),

    // File transport for all logs
    new winston.transports.File({
      filename: path.join('logs', 'combined.log'),
      maxsize: 10485760, // 10MB
      maxFiles: 5,
      tailable: true,
    }),

    // Separate file for error logs
    new winston.transports.File({
      filename: path.join('logs', 'error.log'),
      level: 'error',
      maxsize: 10485760, // 10MB
      maxFiles: 5,
      tailable: true,
    }),
  ],

  // Handle uncaught exceptions
  exceptionHandlers: [
    new winston.transports.File({
      filename: path.join('logs', 'exceptions.log'),
      maxsize: 10485760,
      maxFiles: 3,
    }),
  ],

  // Handle unhandled promise rejections
  rejectionHandlers: [
    new winston.transports.File({
      filename: path.join('logs', 'rejections.log'),
      maxsize: 10485760,
      maxFiles: 3,
    }),
  ],
});

// Performance logger for monitoring
const performanceLogger = winston.createLogger({
  level: 'info',
  format: logFormat,
  defaultMeta: {
    service: 'properties-website',
    type: 'performance',
  },
  transports: [
    new winston.transports.File({
      filename: path.join('logs', 'performance.log'),
      maxsize: 52428800, // 50MB
      maxFiles: 10,
      tailable: true,
    }),
  ],
});

// Security logger for tracking security events
const securityLogger = winston.createLogger({
  level: 'info',
  format: logFormat,
  defaultMeta: {
    service: 'properties-website',
    type: 'security',
  },
  transports: [
    new winston.transports.File({
      filename: path.join('logs', 'security.log'),
      maxsize: 52428800, // 50MB
      maxFiles: 10,
      tailable: true,
    }),
  ],
});

// API logger for tracking API requests
const apiLogger = winston.createLogger({
  level: 'info',
  format: logFormat,
  defaultMeta: {
    service: 'properties-website',
    type: 'api',
  },
  transports: [
    new winston.transports.File({
      filename: path.join('logs', 'api.log'),
      maxsize: 52428800, // 50MB
      maxFiles: 10,
      tailable: true,
    }),
  ],
});

// Create logs directory if it doesn't exist
const fs = require('fs');
const logsDir = path.join(__dirname, '..', 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Helper functions for different log types
const loggers = {
  main: logger,
  performance: performanceLogger,
  security: securityLogger,
  api: apiLogger,

  // Request logging middleware
  requestMiddleware: (req, res, next) => {
    const start = Date.now();

    res.on('finish', () => {
      const duration = Date.now() - start;
      const logData = {
        method: req.method,
        url: req.originalUrl,
        status: res.statusCode,
        duration,
        ip: req.ip || req.connection.remoteAddress,
        userAgent: req.get('User-Agent'),
        contentLength: res.get('Content-Length') || 0,
      };

      apiLogger.info('API Request', logData);

      // Log slow requests (>2s) as warnings
      if (duration > 2000) {
        performanceLogger.warn('Slow Request', logData);
      }
    });

    next();
  },

  // Error logging middleware
  errorMiddleware: (err, req, res, next) => {
    const errorData = {
      error: {
        message: err.message,
        stack: err.stack,
        name: err.name,
      },
      request: {
        method: req.method,
        url: req.originalUrl,
        headers: req.headers,
        body: req.body,
        ip: req.ip || req.connection.remoteAddress,
        userAgent: req.get('User-Agent'),
      },
      timestamp: new Date().toISOString(),
    };

    logger.error('Unhandled Error', errorData);
    next(err);
  },

  // Security event logging
  logSecurityEvent: (event, data) => {
    securityLogger.info('Security Event', {
      event,
      ...data,
      timestamp: new Date().toISOString(),
    });
  },

  // Performance monitoring
  logPerformance: (metric, value, tags = {}) => {
    performanceLogger.info('Performance Metric', {
      metric,
      value,
      tags,
      timestamp: new Date().toISOString(),
    });
  },
};

module.exports = loggers;
