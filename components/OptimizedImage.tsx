/**
 * Optimized Image Component
 * Supports WebP/AVIF, lazy loading, responsive design
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  detectImageFormatSupport, 
  getOptimalImageFormat, 
  generateResponsiveSrcset, 
  generateOptimizedImageUrl,
  LazyImageLoader,
  generateBlurPlaceholder,
  responsiveImageConfig
} from '../utils/imageOptimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string[];
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  quality?: number;
  formats?: ('avif' | 'webp' | 'jpeg' | 'png')[];
  onLoad?: () => void;
  onError?: () => void;
  loading?: 'lazy' | 'eager';
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  sizes,
  priority = false,
  placeholder = 'blur',
  quality = 80,
  formats = ['avif', 'webp', 'jpeg'],
  onLoad,
  onError,
  loading = 'lazy'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageFormatSupport] = useState(detectImageFormatSupport());

  // Use custom sizes or default responsive sizes
  const imageSizes = sizes || responsiveImageConfig.sizes;

  // Generate image URLs for different formats and sizes
  const generateImageSources = useCallback(() => {
    const baseUrl = src.replace(/\.[^/.]+$/, ''); // Remove extension
    const sources = new Map<string, string>();

    // Generate sources for supported formats
    formats.forEach(format => {
      if (format === 'avif' && imageFormatSupport.avif) {
        sources.set('image/avif', generateResponsiveSrcset(
          baseUrl, 
          responsiveImageConfig.breakpoints, 
          'avif'
        ));
      } else if (format === 'webp' && imageFormatSupport.webp) {
        sources.set('image/webp', generateResponsiveSrcset(
          baseUrl, 
          responsiveImageConfig.breakpoints, 
          'webp'
        ));
      } else if (format === 'jpeg') {
        sources.set('image/jpeg', generateResponsiveSrcset(
          baseUrl, 
          responsiveImageConfig.breakpoints, 
          'jpeg'
        ));
      }
    });

    return sources;
  }, [src, formats, imageFormatSupport]);

  // Get fallback src
  const getFallbackSrc = useCallback(() => {
    const optimalFormat = getOptimalImageFormat(imageFormatSupport);
    return generateOptimizedImageUrl(src.replace(/\.[^/.]+$/, ''), {
      width: width || 800,
      quality,
      format: optimalFormat
    });
  }, [src, width, quality, imageFormatSupport]);

  // Lazy loading setup
  useEffect(() => {
    if (!priority && loading === 'lazy' && imgRef.current) {
      const loader = new LazyImageLoader();
      loader.observe(imgRef.current);
       
      return () => {
        loader.disconnect();
      };
    }
  }, [priority, loading]);

  // Set initial src
  useEffect(() => {
    if (priority || loading === 'eager') {
      setCurrentSrc(getFallbackSrc());
    }
  }, [priority, loading, getFallbackSrc]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setIsError(true);
    onError?.();
  }, [onError]);

  const imageSources = generateImageSources();
  const fallbackSrc = getFallbackSrc();

  return (
    <div className={`optimized-image-container ${className}`}>
      {/* Placeholder */}
      {!isLoaded && !isError && (
        <div 
          className="image-placeholder"
          style={{
            width: width ? `${width}px` : '100%',
            height: height ? `${height}px` : 'auto',
            backgroundColor: '#f0f0f0',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: placeholder === 'blur' ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        >
          {placeholder === 'blur' && (
            <img
              src={generateBlurPlaceholder()}
              alt=""
              className="blur-placeholder"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'blur(20px)',
                transform: 'scale(1.1)'
              }}
            />
          )}
        </div>
      )}

      {/* Main image */}
      <picture className={`optimized-image ${isLoaded ? 'loaded' : ''} ${isError ? 'error' : ''}`}>
        {/* AVIF sources */}
        {imageSources.has('image/avif') && (
          <source
            srcSet={imageSources.get('image/avif')}
            sizes={imageSizes.join(', ')}
            type="image/avif"
          />
        )}
        
        {/* WebP sources */}
        {imageSources.has('image/webp') && (
          <source
            srcSet={imageSources.get('image/webp')}
            sizes={imageSizes.join(', ')}
            type="image/webp"
          />
        )}
        
        {/* Fallback */}
        <img
          ref={imgRef}
          src={currentSrc || (priority || loading === 'eager' ? fallbackSrc : '')}
          alt={alt}
          width={width}
          height={height}
          className="optimized-image-img"
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : loading}
          decoding="async"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        />
      </picture>

      {/* Error state */}
      {isError && (
        <div className="image-error">
          <span>Failed to load image</span>
        </div>
      )}
    </div>
  );
};

// Specialized components for common use cases
interface PropertyImageProps extends Omit<OptimizedImageProps, 'src'> {
  propertyId: string;
  imageIndex?: number;
  type?: 'hero' | 'gallery' | 'thumbnail';
}

export const PropertyImage: React.FC<PropertyImageProps> = ({
  propertyId,
  imageIndex = 0,
  type = 'gallery',
  ...props
}) => {
  const getImageUrl = () => {
    const baseUrl = `/images/properties/${propertyId}`;
    switch (type) {
      case 'hero':
        return `${baseUrl}/hero`;
      case 'gallery':
        return `${baseUrl}/gallery/${imageIndex}`;
      case 'thumbnail':
        return `${baseUrl}/thumbnails/${imageIndex}`;
      default:
        return `${baseUrl}/gallery/${imageIndex}`;
    }
  };

  return (
    <OptimizedImage
      src={getImageUrl()}
      {...props}
      className={`property-image property-image--${type} ${props.className || ''}`}
    />
  );
};

export default OptimizedImage;