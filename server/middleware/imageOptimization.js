/**
 * Advanced Image Optimization Middleware with WebP/AVIF Support
 * Implements smart format detection, compression, and delivery optimization
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;
const crypto = require('crypto');

// Modern browser support detection
const SUPPORTED_FORMATS = {
  avif: { quality: 50, speed: 3 },
  webp: { quality: 80, speed: 6 },
  jpeg: { quality: 85, speed: 6 },
  png: { quality: 100, speed: 6 },
};

// Cache configuration
const CACHE_CONFIG = {
  headers: {
    'Cache-Control': 'public, max-age=31536000, immutable',
    Vary: 'Accept',
    'Access-Control-Allow-Origin': '*',
  },
  ttl: 365 * 24 * 60 * 60 * 1000, // 1 year
};

class ImageOptimizationService {
  constructor() {
    this.cache = new Map();
    this.stats = {
      requests: 0,
      cacheHits: 0,
      formats: { avif: 0, webp: 0, jpeg: 0, png: 0 },
      averageResponseTime: 0,
    };
  }

  /**
   * Detect best image format based on Accept header
   */
  detectBestFormat(acceptHeader) {
    if (!acceptHeader) return 'jpeg';

    const preferences = acceptHeader
      .split(',')
      .map((item) => item.trim().toLowerCase())
      .filter((item) => item.startsWith('image/'))
      .map((item) => item.split(';')[0]);

    // Priority order: AVIF > WebP > JPEG > PNG
    for (const format of ['image/avif', 'image/webp']) {
      if (preferences.some((pref) => pref.includes(format.split('/')[1]))) {
        return format.split('/')[1];
      }
    }

    return 'jpeg';
  }

  /**
   * Generate cache key for image processing
   */
  generateCacheKey(imagePath, options) {
    const keyData = {
      path: imagePath,
      ...options,
    };
    return crypto
      .createHash('md5')
      .update(JSON.stringify(keyData))
      .digest('hex');
  }

  /**
   * Apply intelligent compression based on content analysis
   */
  async analyzeImageComplexity(buffer) {
    try {
      const metadata = await sharp(buffer).metadata();

      // Simple complexity scoring based on file size and dimensions
      const size = buffer.length;
      const dimensions = metadata.width * metadata.height;
      const ratio = size / dimensions;

      // High complexity = larger file size relative to dimensions
      if (ratio > 0.8) return 'high';
      if (ratio > 0.4) return 'medium';
      return 'low';
    } catch (error) {
      console.error('Error analyzing image complexity:', error);
      return 'medium';
    }
  }

  /**
   * Optimize image with format-specific settings
   */
  async optimizeImage(buffer, format, options = {}) {
    const {
      width,
      height,
      quality: requestedQuality,
      compression = 'auto',
      progressive = true,
      lossless = false,
    } = options;

    let sharpness = sharp(buffer);

    // Resize if dimensions specified
    if (width || height) {
      sharpness = sharpness.resize({
        width: width || null,
        height: height || null,
        fit: 'inside',
        withoutEnlargement: true,
        fastShrinkOnLoad: true,
      });
    }

    // Analyze image complexity for adaptive quality
    const complexity = await this.analyzeImageComplexity(buffer);
    let quality = requestedQuality;

    if (compression === 'auto') {
      const formatConfig = SUPPORTED_FORMATS[format] || SUPPORTED_FORMATS.jpeg;

      if (complexity === 'high') {
        quality = Math.max(formatConfig.quality - 10, 30);
      } else if (complexity === 'low') {
        quality = Math.min(formatConfig.quality + 5, 100);
      } else {
        quality = formatConfig.quality;
      }
    }

    // Apply format-specific optimizations
    switch (format) {
      case 'avif':
        return await sharpness
          .avif({
            quality,
            effort: formatConfig?.speed || 3,
            chromaSubsampling: '4:2:0',
          })
          .toBuffer();

      case 'webp':
        return await sharpness
          .webp({
            quality,
            effort: formatConfig?.speed || 6,
            alphaQuality: quality,
            lossless: lossless || complexity === 'low',
          })
          .toBuffer();

      case 'jpeg':
        return await sharpness
          .jpeg({
            quality,
            progressive,
            chromaSubsampling: '4:2:0',
            mozjpeg: true,
          })
          .toBuffer();

      case 'png':
        return await sharpness
          .png({
            quality,
            progressive,
            compressionLevel: 9,
            adaptiveFiltering: true,
          })
          .toBuffer();

      default:
        return await sharpness.toBuffer();
    }
  }

  /**
   * Generate responsive image variants
   */
  async generateResponsiveVariants(imagePath, baseBuffer) {
    const breakpoints = [400, 800, 1200, 1600, 2400];
    const variants = {};

    for (const breakpoint of breakpoints) {
      try {
        const optimizedBuffer = await this.optimizeImage(baseBuffer, 'webp', {
          width: breakpoint,
          compression: 'auto',
        });

        variants[`${breakpoint}w`] = {
          buffer: optimizedBuffer,
          contentType: 'image/webp',
          size: optimizedBuffer.length,
        };
      } catch (error) {
        console.error(`Error generating ${breakpoint}w variant:`, error);
      }
    }

    return variants;
  }

  /**
   * Main middleware function
   */
  async imageOptimizationMiddleware(req, res, next) {
    const startTime = Date.now();
    this.stats.requests++;

    try {
      const imagePath = req.path;
      const acceptFormat = this.detectBestFormat(req.headers.accept);

      // Check cache first
      const cacheKey = this.generateCacheKey(imagePath, {
        format: acceptFormat,
        width: req.query.width,
        height: req.query.height,
        quality: req.query.quality,
      });

      if (this.cache.has(cacheKey)) {
        this.stats.cacheHits++;
        const cached = this.cache.get(cacheKey);

        res.set({
          'Content-Type': `image/${acceptFormat}`,
          ...CACHE_CONFIG.headers,
          'X-Cache': 'HIT',
        });

        return res.send(cached);
      }

      // Load original image
      const fullPath = path.join(process.cwd(), 'public', imagePath);
      const originalBuffer = await fs.readFile(fullPath);

      // Optimize image
      const optimizedBuffer = await this.optimizeImage(
        originalBuffer,
        acceptFormat,
        {
          width: req.query.width ? parseInt(req.query.width) : undefined,
          height: req.query.height ? parseInt(req.query.height) : undefined,
          quality: req.query.quality ? parseInt(req.query.quality) : undefined,
          compression: req.query.compression || 'auto',
        }
      );

      // Cache the result
      this.cache.set(cacheKey, optimizedBuffer);

      // Update stats
      this.stats.formats[acceptFormat] =
        (this.stats.formats[acceptFormat] || 0) + 1;
      const responseTime = Date.now() - startTime;
      this.stats.averageResponseTime =
        (this.stats.averageResponseTime + responseTime) / 2;

      // Set headers
      res.set({
        'Content-Type': `image/${acceptFormat}`,
        ...CACHE_CONFIG.headers,
        'X-Cache': 'MISS',
        'X-Original-Size': originalBuffer.length,
        'X-Optimized-Size': optimizedBuffer.length,
        'X-Compression-Ratio': (
          optimizedBuffer.length / originalBuffer.length
        ).toFixed(2),
        'X-Response-Time': `${responseTime}ms`,
      });

      return res.send(optimizedBuffer);
    } catch (error) {
      console.error('Image optimization error:', error);

      // Fallback to original image
      if (req.path.startsWith('/images/')) {
        const fullPath = path.join(process.cwd(), 'public', req.path);
        if (
          await fs
            .access(fullPath)
            .then(() => true)
            .catch(() => false)
        ) {
          const originalBuffer = await fs.readFile(fullPath);
          res.set('Content-Type', 'image/jpeg');
          return res.send(originalBuffer);
        }
      }

      return res.status(500).json({ error: 'Image processing failed' });
    }
  }

  /**
   * Generate image metadata endpoint
   */
  async generateImageMetadata(req, res) {
    try {
      const imagePath = req.query.path;
      if (!imagePath) {
        return res.status(400).json({ error: 'Image path required' });
      }

      const fullPath = path.join(process.cwd(), 'public', imagePath);
      const buffer = await fs.readFile(fullPath);
      const metadata = await sharp(buffer).metadata();

      const variants = await this.generateResponsiveVariants(imagePath, buffer);

      res.json({
        original: {
          width: metadata.width,
          height: metadata.height,
          format: metadata.format,
          size: buffer.length,
        },
        variants: Object.keys(variants).reduce((acc, key) => {
          acc[key] = {
            contentType: variants[key].contentType,
            size: variants[key].size,
          };
          return acc;
        }, {}),
        supportedFormats: Object.keys(SUPPORTED_FORMATS),
        bestFormat: this.detectBestFormat(req.headers.accept),
      });
    } catch (error) {
      console.error('Metadata generation error:', error);
      res.status(500).json({ error: 'Metadata generation failed' });
    }
  }

  /**
   * Get optimization statistics
   */
  getStats() {
    return {
      ...this.stats,
      cacheSize: this.cache.size,
      cacheHitRate:
        this.stats.requests > 0
          ? `${((this.stats.cacheHits / this.stats.requests) * 100).toFixed(2)}%`
          : '0%',
    };
  }

  /**
   * Clear optimization cache
   */
  clearCache() {
    this.cache.clear();
    return { message: 'Cache cleared', size: 0 };
  }
}

// Export middleware instance
const imageOptimizationService = new ImageOptimizationService();

// Middleware export
module.exports = (req, res, next) => {
  // Only process images
  if (
    req.path.startsWith('/images/') ||
    req.path.match(/\.(jpg|jpeg|png|gif|webp|avif)$/i)
  ) {
    return imageOptimizationService.imageOptimizationMiddleware(req, res, next);
  }
  next();
};

module.exports.imageOptimizationService = imageOptimizationService;
module.exports.SUPPORTED_FORMATS = SUPPORTED_FORMATS;
