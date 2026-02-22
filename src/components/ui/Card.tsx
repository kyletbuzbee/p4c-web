import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Card variants including Glassmorphism effect:
 * - default: Standard white card
 * - glass: Glassmorphism with backdrop blur (for hero overlays)
 * - elevated: Higher shadow for emphasis
 * - interactive: Hover effects for clickable cards
 */
const cardVariants = cva(
  'rounded-2xl border border-gray-100 bg-white shadow-lg ring-1 ring-gray-900/5',
  {
    variants: {
      variant: {
        default: '',
        glass: 'bg-white/40 backdrop-blur-lg border-white/20 shadow-xl',
        elevated: 'shadow-2xl border-gray-200',
        interactive: 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer',
      },
      padding: {
        default: 'p-6',
        sm: 'p-4',
        lg: 'p-8',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'default',
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

/**
 * P4C Card Component
 * Supports glassmorphism and interactive variants
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => {
    return (
      <div
        className={cn(cardVariants({ variant, padding, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

// Card sub-components
const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 pb-4', className)}
    {...props}
  />
));

const CardTitle = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('font-serif text-2xl font-bold leading-none tracking-tight text-p4c-navy', className)}
    {...props}
  />
));

const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-gray-600', className)}
    {...props}
  />
));

const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('', className)} {...props} />
));

const CardFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center pt-4', className)}
    {...props}
  />
));

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, cardVariants };
