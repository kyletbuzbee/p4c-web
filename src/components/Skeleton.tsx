import React from 'react';

interface SkeletonProps {
  className?: string;
}

/**
 * Standardized Properties 4 Creation Skeleton Loader
 * Enforces rounded-xl standard to maintain brand dignity during loading states.
 */
const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div
    className={`animate-pulse rounded-xl bg-gray-200 ${className}`}
    aria-hidden="true"
  />
);

export default Skeleton;
