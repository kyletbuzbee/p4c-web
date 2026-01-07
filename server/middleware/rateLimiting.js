const Redis = require('redis');
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

/**
 * Rate Limiting Middleware Configuration
 * Implements comprehensive rate limiting with Redis support
 */

// Initialize Redis client (optional)
let redisClient = null;
if (process.env.REDIS_URL || process.env.REDIS_HOST) {
  try {
    redisClient = Redis.createClient({
      url:
        process.env.REDIS_URL ||
        `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT || 6379}`,
      password: process.env.REDIS_PASSWORD,
      retry_strategy: (options) => {
        if (options.error && options.error.code === 'ECONNREFUSED') {
          return new Error('Redis server connection refused');
        }
        if (options.total_retry_time > 1000 * 60 * 60) {
          return new Error('Retry time exhausted');
        }
        if (options.attempt > 10) {
          return undefined;
        }
        return Math.min(options.attempt * 100, 3000);
      },
    });

    redisClient.on('error', (err) => {
      console.warn('Redis client error:', err);
      redisClient = null; // Fall back to memory store
    });

    redisClient.connect().catch((err) => {
      console.warn('Failed to connect to Redis:', err);
      redisClient = null;
    });
  } catch (err) {
    console.warn('Failed to initialize Redis client:', err);
    redisClient = null;
  }
}

/**
 * Create rate limiter with configuration
 */
function createRateLimiter(options = {}) {
  const defaultOptions = {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: {
      error: 'Too many requests from this IP, please try again later',
      retryAfter: null,
      limit: null,
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    store: redisClient
      ? {
          sendCommand: (...args) => redisClient.sendCommand(args),
        }
      : undefined,
    keyGenerator: (req) =>
      // Use IP address and user agent for more granular rate limiting
      `${req.ip}:${req.get('User-Agent')?.substring(0, 100) || 'unknown'}`,
    handler: (req, res) => {
      const retryAfter = Math.round(options.windowMs / 1000);
      res.status(429).json({
        error: 'Too many requests',
        message: options.message?.error || 'Rate limit exceeded',
        retryAfter,
        limit: options.max,
        timestamp: new Date().toISOString(),
      });
    },
    skip: (req) => {
      // Skip rate limiting for health checks and admin IPs
      const skipPaths = ['/health', '/api/health', '/api/status'];
      const adminIPs = process.env.ADMIN_IPS
        ? process.env.ADMIN_IPS.split(',')
        : [];

      return (
        skipPaths.includes(req.path) ||
        adminIPs.includes(req.ip) ||
        req.path.startsWith('/webhook')
      );
    },
  };

  return rateLimit({
    ...defaultOptions,
    ...options,
  });
}

/**
 * Create speed limiter (slows down requests instead of blocking)
 */
function createSpeedLimiter(options = {}) {
  const defaultOptions = {
    windowMs: 15 * 60 * 1000, // 15 minutes
    delayAfter: 50, // Allow 50 requests per windowMs without delay
    delayMs: 500, // Add 500ms delay per request after delayAfter
    maxDelayMs: 10000, // Maximum delay of 10 seconds
    store: redisClient
      ? {
          sendCommand: (...args) => redisClient.sendCommand(args),
        }
      : undefined,
    keyGenerator: (req) => req.ip,
    skip: (req) => {
      // Skip speed limiting for certain paths
      const skipPaths = ['/health', '/api/health'];
      return skipPaths.includes(req.path);
    },
  };

  return slowDown({
    ...defaultOptions,
    ...options,
  });
}

/**
 * Create advanced rate limiter with different tiers
 */
function createTieredRateLimiter() {
  const tiers = {
    free: {
      windowMs: 60 * 1000, // 1 minute
      max: 20, // 20 requests per minute
      skipSuccessfulRequests: false,
    },
    basic: {
      windowMs: 60 * 1000, // 1 minute
      max: 100, // 100 requests per minute
      skipSuccessfulRequests: false,
    },
    premium: {
      windowMs: 60 * 1000, // 1 minute
      max: 500, // 500 requests per minute
      skipSuccessfulRequests: false,
    },
    admin: {
      windowMs: 60 * 1000, // 1 minute
      max: 1000, // 1000 requests per minute
      skipSuccessfulRequests: true,
    },
  };

  return (req, res, next) => {
    // Determine user tier (implement your logic here)
    const userTier = req.user?.tier || 'free';
    const limiter = createRateLimiter(tiers[userTier] || tiers.free);

    return limiter(req, res, next);
  };
}

/**
 * Rate limiter for sensitive operations
 */
const sensitiveOperationsLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Only 5 attempts per 15 minutes
  message: {
    error: 'Too many sensitive operation attempts',
    retryAfter: 900,
  },
  skipSuccessfulRequests: true,
});

/**
 * Rate limiter for authentication endpoints
 */
const authLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 login attempts per 15 minutes
  message: {
    error: 'Too many authentication attempts',
    retryAfter: 900,
  },
  skipSuccessfulRequests: true,
});

/**
 * Rate limiter for API endpoints
 */
const apiLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // 1000 requests per 15 minutes
  message: {
    error: 'API rate limit exceeded',
    retryAfter: 900,
  },
});

/**
 * Rate limiter for search endpoints
 */
const searchLimiter = createRateLimiter({
  windowMs: 60 * 1000, // 1 minute
  max: 30, // 30 searches per minute
  message: {
    error: 'Search rate limit exceeded',
    retryAfter: 60,
  },
});

/**
 * Rate limiter for file uploads
 */
const uploadLimiter = createRateLimiter({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // 10 uploads per hour
  message: {
    error: 'Upload rate limit exceeded',
    retryAfter: 3600,
  },
});

/**
 * Rate limiter for contact forms
 */
const contactLimiter = createRateLimiter({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 submissions per hour
  message: {
    error: 'Contact form submission rate limit exceeded',
    retryAfter: 3600,
  },
});

/**
 * Rate limiter for password reset
 */
const passwordResetLimiter = createRateLimiter({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // 3 password reset attempts per hour
  message: {
    error: 'Password reset rate limit exceeded',
    retryAfter: 3600,
  },
});

/**
 * Rate limiter for email verification
 */
const emailVerificationLimiter = createRateLimiter({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 verification attempts per hour
  message: {
    error: 'Email verification rate limit exceeded',
    retryAfter: 3600,
  },
});

/**
 * Global rate limiter (catch-all)
 */
const globalLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 2000, // 2000 requests per 15 minutes
  message: {
    error: 'Global rate limit exceeded',
    retryAfter: 900,
  },
});

/**
 * Speed limiter for general API requests
 */
const apiSpeedLimiter = createSpeedLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 100, // Allow 100 requests without delay
  delayMs: 200, // Add 200ms delay per request after delayAfter
});

/**
 * Get current rate limit status for an IP
 */
async function getRateLimitStatus(ip) {
  if (!redisClient) {
    return {
      success: false,
      error: 'Redis not available',
    };
  }

  try {
    const key = `rate-limit:${ip}`;
    const current = await redisClient.get(key);
    const ttl = await redisClient.ttl(key);

    return {
      success: true,
      current: parseInt(current) || 0,
      ttl: ttl || 0,
      windowMs: 15 * 60 * 1000, // 15 minutes
    };
  } catch (error) {
    console.error('Error getting rate limit status:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Reset rate limit for an IP (admin function)
 */
async function resetRateLimit(ip) {
  if (!redisClient) {
    return {
      success: false,
      error: 'Redis not available',
    };
  }

  try {
    const keys = [
      `rate-limit:${ip}`,
      `slow-down:${ip}`,
      `auth-limit:${ip}`,
      `search-limit:${ip}`,
    ];

    await Promise.all(keys.map((key) => redisClient.del(key)));

    return {
      success: true,
      message: `Rate limit reset for IP: ${ip}`,
    };
  } catch (error) {
    console.error('Error resetting rate limit:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Clean up Redis connection on shutdown
 */
function cleanup() {
  if (redisClient) {
    redisClient.quit();
  }
}

// Handle process shutdown
process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

module.exports = {
  // Basic rate limiters
  rateLimit: createRateLimiter,
  speedLimit: createSpeedLimiter,
  tieredRateLimiter: createTieredRateLimiter,

  // Specific purpose limiters
  authLimiter,
  apiLimiter,
  searchLimiter,
  uploadLimiter,
  contactLimiter,
  passwordResetLimiter,
  emailVerificationLimiter,
  sensitiveOperationsLimiter,
  globalLimiter,
  apiSpeedLimiter,

  // Utility functions
  getRateLimitStatus,
  resetRateLimit,

  // Cleanup
  cleanup,
};
