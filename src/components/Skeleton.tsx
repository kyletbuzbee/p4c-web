import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'image' | 'card';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

/**
 * Standardized Properties 4 Creation Skeleton Loader
 * Enforces rounded-xl standard to maintain brand dignity during loading states.
 * Optimized for CLS stability with explicit dimensions.
 */
const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rectangular',
  width,
  height,
  animation = 'pulse',
}) => {
  // Animation styles
  const animationClass =
    animation === 'pulse'
      ? 'animate-pulse'
      : animation === 'wave'
        ? 'animate-pulse'
        : '';

  // Base styles
  const baseStyles: React.CSSProperties = {
    width: width || '100%',
    height: height || 'auto',
    borderRadius:
      variant === 'circular'
        ? '50%'
        : variant === 'text'
          ? undefined
          : '0.75rem',
  };

  // Variant-specific styles
  const variantStyles: Record<string, React.CSSProperties> = {
    text: {
      height: '1em',
      marginTop: '0.5em',
      marginBottom: '0.5em',
    },
    circular: {
      borderRadius: '50%',
    },
    rectangular: {
      borderRadius: '0.75rem',
    },
    image: {
      aspectRatio: '16/9',
      width: '100%',
    },
    card: {
      aspectRatio: '4/3',
      width: '100%',
    },
  };

  return (
    <div
      className={`bg-gray-200 ${animationClass} ${className}`}
      style={{ ...baseStyles, ...variantStyles[variant] }}
      aria-hidden="true"
      role="presentation"
    />
  );
};

/**
 * Pre-configured skeleton variants for consistent loading states
 */
export const SkeletonCard: React.FC = () => (
  <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
    <div className="mb-4">
      <Skeleton variant="image" className="w-full" />
    </div>
    <Skeleton width="60%" height="1.5em" className="mb-2" />
    <Skeleton width="80%" height="1em" />
    <div className="mt-4 grid grid-cols-3 gap-2">
      <Skeleton variant="rectangular" height="3em" />
      <Skeleton variant="rectangular" height="3em" />
      <Skeleton variant="rectangular" height="3em" />
    </div>
  </div>
);

export const SkeletonHero: React.FC = () => (
  <div className="relative h-[90vh] w-full overflow-hidden bg-p4c-navy">
    <Skeleton
      variant="image"
      className="absolute inset-0"
      width="100%"
      height="100%"
    />
    <div className="relative z-10 p-8">
      <Skeleton
        width="70%"
        height="3em"
        className="mb-4 rounded-lg"
        animation="none"
      />
      <Skeleton
        width="50%"
        height="1.5em"
        className="rounded-lg"
        animation="none"
      />
    </div>
  </div>
);

export const SkeletonPropertyDetails: React.FC = () => (
  <div className="rounded-xl bg-white p-8 shadow-lg">
    <Skeleton variant="image" className="mb-8 h-[50vh] w-full" />
    <Skeleton width="40%" height="2em" className="mb-4" />
    <Skeleton width="100%" height="1em" className="mb-2" />
    <Skeleton width="100%" height="1em" className="mb-2" />
    <Skeleton width="80%" height="1em" />
    <div className="mt-8 grid grid-cols-4 gap-4">
      <Skeleton variant="rectangular" height="4em" />
      <Skeleton variant="rectangular" height="4em" />
      <Skeleton variant="rectangular" height="4em" />
      <Skeleton variant="rectangular" height="4em" />
    </div>
  </div>
);

export const SkeletonText: React.FC<{ lines?: number }> = ({ lines = 3 }) => (
  <div className="space-y-2">
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton
        key={i}
        variant="text"
        width={i === lines - 1 ? '60%' : '100%'}
      />
    ))}
  </div>
);

export const SkeletonAvatar: React.FC<{ size?: number }> = ({ size = 40 }) => (
  <Skeleton
    variant="circular"
    width={size}
    height={size}
    className="shrink-0"
  />
);

export default Skeleton;
