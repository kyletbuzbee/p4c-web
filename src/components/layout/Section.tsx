import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'beige' | 'white' | 'navy' | 'gray';
  padding?: 'none' | 'small' | 'default' | 'large';
}

/**
 * Section Component - Standardized section wrapper
 * 
 * Features:
 * - Consistent vertical spacing (py-16 mobile, py-24 desktop)
 * - Max-width container (max-w-7xl)
 * - Background color options
 * - Padding variants
 */
export function Section({
  children,
  className,
  background = 'beige',
  padding = 'default',
}: SectionProps) {
  const backgroundClasses = {
    beige: 'bg-p4c-beige',
    white: 'bg-white',
    navy: 'bg-p4c-navy',
    gray: 'bg-gray-50',
  };

  const paddingClasses = {
    none: '',
    small: 'py-8 sm:py-12',
    default: 'py-12 sm:py-16 lg:py-20',
    large: 'py-16 sm:py-20 lg:py-24',
  };

  return (
    <section
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        'w-full',
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export default Section;
