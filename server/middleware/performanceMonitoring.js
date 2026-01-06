/**
 * Performance Monitoring Middleware
 * Tracks application performance metrics and provides monitoring endpoints
 */

const os = require('os');
const process = require('process');

/**
 * Performance monitoring middleware
 */
const createPerformanceMonitor = () => (req, res, next) => {
  const startTime = process.hrtime.bigint();
  const startMemory = process.memoryUsage();

  // Store start time for later use
  req.performanceStart = {
    time: startTime,
    memory: startMemory,
  };

  // Override res.end to capture end metrics
  const originalEnd = res.end;
  res.end = function (...args) {
    const endTime = process.hrtime.bigint();
    const endMemory = process.memoryUsage();

    // Calculate metrics
    const responseTime = Number(endTime - startTime) / 1e6; // Convert to milliseconds
    const memoryDelta = {
      rss: endMemory.rss - startMemory.rss,
      heapUsed: endMemory.heapUsed - startMemory.heapUsed,
      heapTotal: endMemory.heapTotal - startMemory.heapTotal,
      external: endMemory.external - startMemory.external,
    };

    // Log performance metrics
    const performanceLog = {
      timestamp: new Date().toISOString(),
      method: req.method,
      path: req.path,
      statusCode: res.statusCode,
      responseTime,
      memoryDelta,
      userAgent: req.get("User-Agent"),
      ip: req.ip,
      contentLength: res.get("Content-Length"),
      contentType: res.get("Content-Type"),
    };

    // Log based on response time thresholds
    if (responseTime > 1000) {
      console.warn(
        "Performance Alert - Slow Response:",
        JSON.stringify(performanceLog),
      );
    } else if (responseTime > 500) {
      console.log(
        "Performance Notice - Moderate Response:",
        JSON.stringify(performanceLog),
      );
    }

    // Add performance headers (optional)
    res.setHeader("X-Response-Time", `${responseTime.toFixed(2)}ms`);
    res.setHeader(
      "X-Memory-Usage",
      `${(endMemory.heapUsed / 1024 / 1024).toFixed(2)}MB`,
    );

    // Store metrics for potential further processing
    req.performanceMetrics = performanceLog;

    originalEnd.apply(this, args);
  };

  next();
};

/**
 * System health monitoring
 */
const getSystemHealth = () => {
  const memUsage = process.memoryUsage();
  const cpuUsage = process.cpuUsage();
  const loadAvg = os.loadavg();
  const freeMem = os.freemem();
  const totalMem = os.totalmem();

  return {
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: {
      rss: memUsage.rss,
      heapTotal: memUsage.heapTotal,
      heapUsed: memUsage.heapUsed,
      external: memUsage.external,
      free: freeMem,
      total: totalMem,
      usagePercent: ((totalMem - freeMem) / totalMem) * 100,
    },
    cpu: {
      user: cpuUsage.user,
      system: cpuUsage.system,
      loadAverage: {
        '1min': loadAvg[0],
        '5min': loadAvg[1],
        '15min': loadAvg[2],
      },
    },
    platform: os.platform(),
    nodeVersion: process.version,
    pid: process.pid,
  };
};

/**
 * Request metrics aggregation
 */
class MetricsAggregator {
  constructor() {
    this.metrics = {
      totalRequests: 0,
      totalResponseTime: 0,
      avgResponseTime: 0,
      minResponseTime: Infinity,
      maxResponseTime: 0,
      statusCodeCounts: {},
      pathCounts: {},
      errorCount: 0,
      slowRequests: 0,
    };

    this.samplingRate = 0.1; // Sample 10% of requests for detailed metrics
  }

  recordRequest(metrics) {
    this.metrics.totalRequests++;
    this.metrics.totalResponseTime += metrics.responseTime;

    // Update min/max
    if (metrics.responseTime < this.metrics.minResponseTime) {
      this.metrics.minResponseTime = metrics.responseTime;
    }
    if (metrics.responseTime > this.metrics.maxResponseTime) {
      this.metrics.maxResponseTime = metrics.responseTime;
    }

    // Count status codes
    this.metrics.statusCodeCounts[metrics.statusCode] =
      (this.metrics.statusCodeCounts[metrics.statusCode] || 0) + 1;

    // Count paths
    this.metrics.pathCounts[metrics.path] =
      (this.metrics.pathCounts[metrics.path] || 0) + 1;

    // Count errors
    if (metrics.statusCode >= 400) {
      this.metrics.errorCount++;
    }

    // Count slow requests
    if (metrics.responseTime > 1000) {
      this.metrics.slowRequests++;
    }

    // Update average
    this.metrics.avgResponseTime =
      this.metrics.totalResponseTime / this.metrics.totalRequests;
  }

  getMetrics() {
    return {
      ...this.metrics,
      avgResponseTime: this.metrics.avgResponseTime,
      errorRate: (this.metrics.errorCount / this.metrics.totalRequests) * 100,
      slowRequestRate:
        (this.metrics.slowRequests / this.metrics.totalRequests) * 100,
      samplingRate: this.samplingRate,
    };
  }

  reset() {
    this.metrics = {
      totalRequests: 0,
      totalResponseTime: 0,
      avgResponseTime: 0,
      minResponseTime: Infinity,
      maxResponseTime: 0,
      statusCodeCounts: {},
      pathCounts: {},
      errorCount: 0,
      slowRequests: 0,
    };
  }
}

const metricsAggregator = new MetricsAggregator();

/**
 * Performance monitoring endpoints
 */
const createPerformanceEndpoints = (app) => {
  // Health check with detailed metrics
  app.get('/api/performance/health', (req, res) => {
    const health = getSystemHealth();
    const metrics = metricsAggregator.getMetrics();

    res.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      system: health,
      application: metrics,
    });
  });

  // Performance metrics endpoint
  app.get('/api/performance/metrics', (req, res) => {
    const metrics = metricsAggregator.getMetrics();
    res.json(metrics);
  });

  // Reset metrics endpoint (for testing)
  app.post('/api/performance/reset', (req, res) => {
    metricsAggregator.reset();
    res.json({
      message: 'Metrics reset successfully',
      timestamp: new Date().toISOString(),
    });
  });

  // Real-time performance endpoint
  app.get('/api/performance/realtime', (req, res) => {
    const currentMetrics = {
      timestamp: new Date().toISOString(),
      memory: process.memoryUsage(),
      cpu: process.cpuUsage(),
      uptime: process.uptime(),
      load: os.loadavg(),
      activeHandles: process._getActiveHandles().length,
      activeRequests: process._getActiveRequests().length,
    };

    res.json(currentMetrics);
  });
};

module.exports = {
  createPerformanceMonitor,
  getSystemHealth,
  MetricsAggregator,
  createPerformanceEndpoints,
  metricsAggregator,
};
