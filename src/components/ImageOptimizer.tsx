import React, { useState, useEffect, useRef } from 'react';
import { useImageFormat } from '../context/ImageFormatContext';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  style?: React.CSSProperties;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Mb2FkaW5nLi4uPC90ZXh0Pjwvc3ZnPg==',
  onLoad,
  onError,
  style,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholder);
  const imgRef = useRef<HTMLImageElement>(null);
  const { supportedFormat } = useImageFormat();

  // Generate optimized image URLs
  const generateOptimizedSrc = (
    originalSrc: string,
    format: string = 'webp'
  ) => {
    // In a real implementation, this would call an image optimization service
    // For now, we'll simulate format conversion and responsive sizing

    // Check if the image is already in the desired format
    const extension = originalSrc.split('.').pop()?.toLowerCase();
    if (extension === format) return originalSrc;

    // Simulate format conversion (in production, use Cloudinary, Imgix, etc.)
    const baseName = originalSrc.replace(/\.[^/.]+$/, '');
    return `${baseName}.${format}`;
  };

  // Generate responsive image sources
  const generateSrcSet = (originalSrc: string) => {
    const widths = [320, 640, 1024, 1920];
    return widths
      .map((width) => `${generateOptimizedSrc(originalSrc)} ${width}w`)
      .join(', ');
  };

  useEffect(() => {
    let isMounted = true;

    const loadImage = () => {
      try {
        // Generate optimized source
        const optimizedSrc = generateOptimizedSrc(src, supportedFormat);

        // Preload image
        const img = new window.Image();

        // Set up event handlers
        img.onload = () => {
          if (isMounted) {
            setCurrentSrc(optimizedSrc);
            setIsLoaded(true);
            onLoad?.();
          }
        };

        img.onerror = () => {
          if (isMounted) {
            setHasError(true);
            setCurrentSrc(src); // Fallback to original
            onError?.();
          }
        };

        // Add loading class for CSS animations
        if (imgRef.current) {
          imgRef.current.classList.add('loading');
        }

        // Set source
        img.src = optimizedSrc;
      } catch {
        if (isMounted) {
          setCurrentSrc(src);
          setIsLoaded(true);
        }
      }
    };

    if (priority) {
      // Load immediately for priority images
      loadImage();
    } else {
      // Use IntersectionObserver for lazy loading
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadImage();
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '50px', // Load 50px before entering viewport
          threshold: 0.01,
        }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        const currentRef = imgRef.current;
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }

    return () => {
      isMounted = false;
    };
  }, [src, priority, supportedFormat, onLoad, onError]);

  // Generate sizes attribute for responsive images
  const sizes = width
    ? `${width}px`
    : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

  return (
    <img
      ref={imgRef}
      src={currentSrc}
      srcSet={generateSrcSet(src)}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      className={`image-optimizer ${isLoaded ? 'loaded' : 'loading'} ${hasError ? 'error' : ''} ${className}`}
      style={{
        ...style,
        // Add blur effect while loading
        filter: !isLoaded ? 'blur(10px)' : 'none',
        transition: 'filter 0.3s ease-in-out, opacity 0.3s ease-in-out',
        opacity: isLoaded ? 1 : 0.7,
      }}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      {...props}
    />
  );
};

// Progressive image component with blur placeholder
export const ProgressiveImage: React.FC<
  ImageOptimizerProps & { blurDataURL?: string }
> = ({ blurDataURL, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {/* Blur placeholder */}
      {!isLoaded && blurDataURL && (
        <img
          src={blurDataURL}
          alt=""
          className="absolute inset-0 size-full scale-110 object-cover blur-sm"
          aria-hidden="true"
        />
      )}

      {/* Main image */}
      <ImageOptimizer
        {...props}
        onLoad={() => setIsLoaded(true)}
        className={`${props.className} ${isLoaded ? '' : 'opacity-0'}`}
      />
    </div>
  );
};

export default ImageOptimizer;
