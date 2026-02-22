import { ReactNode } from 'react';
import { IMAGES } from '../../constants/images';
import OptimizedImage from '../OptimizedImage';
import { cn } from '../../utils/cn';

export interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
  className?: string;
  variant?: 'image' | 'video';
  videoSrc?: string;
  priority?: boolean;
}

/**
 * PageHero Component - Standardized hero for all pages
 * 
 * Features:
 * - Consistent glassmorphism text container
 * - LCP optimization with priority prop
 * - Responsive height and text sizes
 * - Standardized vertical spacing
 */
export function PageHero({
  title,
  subtitle,
  backgroundImage = IMAGES.BANNERS.HERO_HOME,
  children,
  className,
  priority = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative flex h-[50vh] w-full items-center overflow-hidden bg-p4c-navy sm:h-[60vh] md:h-[70vh]',
        className
      )}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <OptimizedImage
          src={backgroundImage}
          alt=""
          className="size-full object-cover"
          priority={priority}
        />
        {/* Overlay for text contrast */}
        <div className="absolute inset-0 bg-p4c-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-p4c-navy/60 via-transparent to-transparent" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            'max-w-2xl rounded-2xl border border-white/20 bg-p4c-navy/60 p-6 backdrop-blur-xl sm:p-8 md:p-10',
            children ? '' : 'text-content-only'
          )}
        >
          <h1 className="mb-2 font-serif text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base font-light leading-relaxed text-gray-200 sm:text-lg md:text-xl">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
