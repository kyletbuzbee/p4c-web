import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  priority = false,
}) => {
  // Generate responsive image sizes based on src
  const getResponsiveSrcset = (imageSrc: string) =>
    // This would typically be implemented with image CDN support
    // For now, return the original src
    imageSrc;
  return (
    <img
      src={src}
      srcSet={getResponsiveSrcset(src)}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      alt={alt}
      className={className}
      loading={loading}
      fetchPriority={priority ? 'high' : 'auto'}
      role="img"
    />
  );
};

export default OptimizedImage;
