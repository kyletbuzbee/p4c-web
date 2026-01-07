const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const { combine, timestamp, errors, printf, colorize, json } = winston.format;
const LokiTransport = require('winston-loki');
const {
  createMetrics,
  collectDefaultMetrics,
  register,
} = require('prom-client');

// Initialize metrics collection
const startMetricsCollection = () => {
  collectDefaultMetrics({ prefix: 'app_' });

  // Custom metrics
  const httpRequestDuration = new Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'status_code'],
  });

  const httpRequestsTotal = new Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status_code'],
  });

  const activeConnections = new Gauge({
    name: 'active_connections',
    help: 'Number of active connections',
  });

  const databaseQueryDuration = new Histogram({
    name: 'database_query_duration_seconds',
    help: 'Duration of database queries in seconds',
    labelNames: ['query_type', 'table'],
  });

  const cacheHitRatio = new Gauge({
    name: 'cache_hit_ratio',
    help: 'Cache hit ratio',
    labelNames: ['cache_type'],
  });

  return {
    httpRequestDuration,
    httpRequestsTotal,
    activeConnections,
    databaseQueryDuration,
    cacheHitRatio,
  };
};

// Configure Winston logger
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(timestamp(), errors({ stack: true }), json()),
  defaultMeta: {
    service: 'properties-app',
    version: process.env.npm_package_version || '1.0.0',
    environment: process.env.NODE_ENV || 'development',
  },
  transports: [
    // Console logging
    new winston.transports.Console({
      format: combine(
        colorize(),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        printf(
          ({ timestamp, level, message, ...meta }) =>
            `${timestamp} [${level}]: ${message} ${Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''}`
        )
      ),
    }),
  ],
});

// Add file transports for production
if (process.env.NODE_ENV === 'production') {
  // Error log file
  logger.add(
    new DailyRotateFile({
      filename: 'logs/error-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      level: 'error',
      format: combine(timestamp(), errors({ stack: true }), json()),
      maxSize: '20m',
      maxFiles: '14d',
    })
  );

  // Combined log file
  logger.add(
    new DailyRotateFile({
      filename: 'logs/combined-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      format: combine(timestamp(), errors({ stack: true }), json()),
      maxSize: '20m',
      maxFiles: '30d',
    })
  );

  // Security events log
  logger.add(
    new DailyRotateFile({
      filename: 'logs/security-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      level: 'warn',
      format: combine(timestamp(), json()),
      maxSize: '20m',
      maxFiles: '90d',
    })
  );

  // Add Loki transport if configured
  if (process.env.LOKI_URL) {
    logger.add(
      new LokiTransport({
        host: process.env.LOKI_URL,
        basicAuth: process.env.LOKI_USERNAME
          ? {
              username: process.env.LOKI_USERNAME,
              password: process.env.LOKI_PASSWORD,
            }
          : undefined,
        labels: {
          service: 'properties-app',
          environment: process.env.NODE_ENV,
        },
        format: winston.format.json(),
        level: 'info',
      })
    );
  }
}

// Security event logger
const securityLogger = (event, details) => {
  logger.warn('Security Event', {
    event,
    details,
    timestamp: new Date().toISOString(),
    ip: details.ip || 'unknown',
    userAgent: details.userAgent || 'unknown',
    userId: details.userId || 'anonymous',
  });
};

// Performance logger
const performanceLogger = (operation, duration, metadata = {}) => {
  logger.info('Performance Metric', {
    operation,
    duration,
    ...metadata,
    timestamp: new Date().toISOString(),
  });
};

// Database query logger
const databaseLogger = (query, duration, success, metadata = {}) => {
  const level = success ? 'debug' : 'error';
  logger.log(level, 'Database Query', {
    query: query.substring(0, 200), // Truncate for privacy
    duration,
    success,
    ...metadata,
    timestamp: new Date().toISOString(),
  });
};

// API request logger
const apiLogger = (req, res, duration) => {
  const logData = {
    method: req.method,
    url: req.originalUrl,
    statusCode: res.statusCode,
    duration,
    ip: req.ip,
    userAgent: req.get('User-Agent'),
    userId: req.user?.id,
    timestamp: new Date().toISOString(),
  };

  if (res.statusCode >= 400) {
    logger.warn('API Request Failed', logData);
  } else {
    logger.info('API Request', logData);
  }
};

// Error logger with context
const errorLogger = (error, context = {}) => {
  logger.error('Application Error', {
    message: error.message,
    stack: error.stack,
    context,
    timestamp: new Date().toISOString(),
  });
};

// User activity logger
const userActivityLogger = (userId, action, details = {}) => {
  logger.info('User Activity', {
    userId,
    action,
    details,
    timestamp: new Date().toISOString(),
  });
};

// Authentication logger
const authLogger = (event, userId, ip, success, details = {}) => {
  const level = success ? 'info' : 'warn';
  logger.log(level, 'Authentication Event', {
    event,
    userId,
    ip,
    success,
    details,
    timestamp: new Date().toISOString(),
  });

  // Log security events separately
  if (!success && event === 'login_failed') {
    securityLogger('authentication_failure', {
      userId,
      ip,
      event,
      ...details,
    });
  }
};

// Health check logger
const healthLogger = (status, checks = {}) => {
  logger.info('Health Check', {
    status,
    checks,
    timestamp: new Date().toISOString(),
  });
};

// Metrics collection
class MetricsCollector {
  constructor() {
    this.metrics = startMetricsCollection();
  }

  recordHttpRequest(method, route, statusCode, duration) {
    this.metrics.httpRequestDuration
      .labels(method, route, statusCode.toString())
      .observe(duration / 1000);

    this.metrics.httpRequestsTotal
      .labels(method, route, statusCode.toString())
      .inc();
  }

  recordDatabaseQuery(queryType, table, duration, success) {
    this.metrics.databaseQueryDuration
      .labels(queryType, table)
      .observe(duration / 1000);
  }

  updateCacheHitRatio(cacheType, hitRatio) {
    this.metrics.cacheHitRatio.labels(cacheType).set(hitRatio);
  }

  updateActiveConnections(count) {
    this.metrics.activeConnections.set(count);
  }

  getMetrics() {
    return register.metrics();
  }

  getMetricsSummary() {
    return register.getMetricsAsJSON();
  }
}

// Initialize metrics collector
const metricsCollector = new MetricsCollector();

// Middleware for automatic request logging
const requestLogger = (req, res, next) => {
  const startTime = Date.now();

  // Add request ID for tracing
  req.requestId = require('crypto').randomUUID();
  res.setHeader('X-Request-ID', req.requestId);

  // Log request start
  logger.debug('Request Started', {
    requestId: req.requestId,
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    userAgent: req.get('User-Agent'),
  });

  // Override res.end to log response
  const originalEnd = res.end;
  res.end = function (...args) {
    const duration = Date.now() - startTime;

    // Record metrics
    metricsCollector.recordHttpRequest(
      req.method,
      req.route?.path || req.path,
      res.statusCode,
      duration
    );

    // Log response
    logger.debug('Request Completed', {
      requestId: req.requestId,
      method: req.method,
      url: req.originalUrl,
      statusCode: res.statusCode,
      duration,
      contentLength: res.get('content-length'),
    });

    // Call original end method
    originalEnd.apply(this, args);
  };

  next();
};

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  const duration = Date.now() - (req.startTime || Date.now());

  errorLogger(err, {
    requestId: req.requestId,
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    userAgent: req.get('User-Agent'),
    duration,
  });

  // Don't leak error details in production
  const message =
    process.env.NODE_ENV === 'production'
      ? 'Internal Server Error'
      : err.message;

  res.status(err.status || 500).json({
    error: message,
    requestId: req.requestId,
    timestamp: new Date().toISOString(),
  });
};

// Performance monitoring middleware
const performanceMonitor =
  (threshold = 1000) =>
  (req, res, next) => {
    const startTime = Date.now();

    res.on('finish', () => {
      const duration = Date.now() - startTime;

      if (duration > threshold) {
        logger.warn('Slow Request Detected', {
          method: req.method,
          url: req.originalUrl,
          duration,
          threshold,
          statusCode: res.statusCode,
        });
      }
    });

    next();
  };

// Health check endpoint data
const healthCheckData = {
  uptime: process.uptime(),
  timestamp: Date.now(),
  version: process.env.npm_package_version || '1.0.0',
  environment: process.env.NODE_ENV || 'development',
  memory: process.memoryUsage(),
  cpu: process.cpuUsage(),
};

module.exports = {
  logger,
  securityLogger,
  performanceLogger,
  databaseLogger,
  apiLogger,
  errorLogger,
  userActivityLogger,
  authLogger,
  healthLogger,
  metricsCollector,
  requestLogger,
  errorHandler,
  performanceMonitor,
  healthCheckData,
};
