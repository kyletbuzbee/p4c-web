import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Badge variants for different use cases:
 * - default: Navy background, white text
 * - outline: Gold border, navy text
 * - success: Green background for available/active
 * - warning: Yellow/amber for pending states
 * - danger: Red for errors/critical
 * - secondary: Gray for less important info
 */
const badgeVariants = cva(
  'inline-flex items-center rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-p4c-gold focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-p4c-navy text-white',
        outline: 'border border-p4c-gold bg-transparent text-p4c-navy',
        success: 'bg-green-100 text-green-800 border border-green-200',
        warning: 'bg-amber-100 text-amber-800 border border-amber-200',
        danger: 'bg-red-100 text-red-800 border border-red-200',
        secondary: 'bg-gray-100 text-gray-800 border border-gray-200',
        gold: 'bg-p4c-gold text-p4c-navy',
      },
      size: {
        default: 'px-2.5 py-0.5 text-xs',
        sm: 'px-2 py-0.5 text-[10px]',
        lg: 'px-3 py-1 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * P4C Badge Component
 * For labeling, status indicators, and highlights
 */
export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { badgeVariants };
