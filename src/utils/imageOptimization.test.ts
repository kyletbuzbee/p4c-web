/**
 * Image Optimization Utilities Tests - Simplified
 */

import {
  detectImageFormatSupport,
  getOptimalImageFormat,
  generateResponsiveSrcset,
  generateOptimizedImageUrl,
  imageOptimizationConfig,
  responsiveImageConfig,
  generateBlurPlaceholder,
} from './imageOptimization';

describe('Image Optimization Utilities', () => {
  describe('detectImageFormatSupport', () => {
    it('should return format support object', () => {
      const result = detectImageFormatSupport();

      expect(result).toHaveProperty('webp');
      expect(result).toHaveProperty('avif');
      expect(result).toHaveProperty('original');
      expect(typeof result.webp).toBe('boolean');
    });
  });

  describe('getOptimalImageFormat', () => {
    it('should return avif when supported', () => {
      expect(getOptimalImageFormat({ webp: true, avif: true, original: 'jpeg' })).toBe('avif');
    });

    it('should return webp when avif not supported', () => {
      expect(getOptimalImageFormat({ webp: true, avif: false, original: 'jpeg' })).toBe('webp');
    });

    it('should return jpeg when neither avif nor webp supported', () => {
      expect(getOptimalImageFormat({ webp: false, avif: false, original: 'jpeg' })).toBe('jpeg');
    });
  });

  describe('generateResponsiveSrcset', () => {
    it('should generate srcset string with widths', () => {
      const result = generateResponsiveSrcset('https://example.com/image', [320, 640], 'webp');
      
      expect(result).toContain('320w');
      expect(result).toContain('640w');
    });

    it('should handle different formats', () => {
      const avifResult = generateResponsiveSrcset('https://example.com/image', [640], 'avif');
      const jpegResult = generateResponsiveSrcset('https://example.com/image', [640], 'jpeg');
      
      expect(avifResult).toContain('.avif');
      expect(jpegResult).toContain('.jpeg');
    });
  });

  describe('generateOptimizedImageUrl', () => {
    it('should generate URL with width parameter', () => {
      const result = generateOptimizedImageUrl('https://example.com/image', { width: 800 });
      expect(result).toContain('w=800');
    });

    it('should generate URL with height parameter', () => {
      const result = generateOptimizedImageUrl('https://example.com/image', { height: 600 });
      expect(result).toContain('h=600');
    });

    it('should generate URL with quality parameter', () => {
      const result = generateOptimizedImageUrl('https://example.com/image', { quality: 60 });
      expect(result).toContain('q=60');
    });

    it('should generate URL with format parameter', () => {
      const result = generateOptimizedImageUrl('https://example.com/image', { format: 'avif' });
      expect(result).toContain('.avif');
    });

    it('should use webp as default format', () => {
      const result = generateOptimizedImageUrl('https://example.com/image');
      expect(result).toContain('.webp');
    });

    it('should handle multiple parameters', () => {
      const result = generateOptimizedImageUrl('https://example.com/image', {
        width: 800,
        height: 600,
        quality: 75,
      });
      
      expect(result).toContain('w=800');
      expect(result).toContain('h=600');
      expect(result).toContain('q=75');
    });
  });

  describe('imageOptimizationConfig', () => {
    it('should have required configuration properties', () => {
      expect(imageOptimizationConfig).toHaveProperty('quality');
      expect(imageOptimizationConfig).toHaveProperty('progressive');
      expect(imageOptimizationConfig).toHaveProperty('lossy');
      expect(imageOptimizationConfig).toHaveProperty('effort');
    });

    it('should have valid quality range', () => {
      expect(imageOptimizationConfig.quality).toBeGreaterThan(0);
      expect(imageOptimizationConfig.quality).toBeLessThanOrEqual(100);
    });
  });

  describe('responsiveImageConfig', () => {
    it('should have required configuration properties', () => {
      expect(responsiveImageConfig).toHaveProperty('breakpoints');
      expect(responsiveImageConfig).toHaveProperty('formats');
      expect(responsiveImageConfig).toHaveProperty('quality');
    });

    it('should have valid breakpoints', () => {
      expect(responsiveImageConfig.breakpoints.length).toBeGreaterThan(0);
    });

    it('should have valid formats', () => {
      expect(responsiveImageConfig.formats).toContain('webp');
      expect(responsiveImageConfig.formats).toContain('avif');
    });
  });

  describe('generateBlurPlaceholder', () => {
    it('should return a base64 encoded SVG string', () => {
      const result = generateBlurPlaceholder();
      
      expect(result).toContain('data:image/svg+xml;base64,');
    });
  });
});
