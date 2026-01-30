import React, { useState, useEffect, useRef } from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  animate?: boolean;
  'aria-label'?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  animate = true,
  'aria-label': ariaLabel,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;

    if (animate) {
      // Create ripple effect
      const rect = buttonRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const newRipple = { id: Date.now(), x, y };
        setRipples((prev) => [...prev, newRipple]);

        // Remove ripple after animation
        setTimeout(() => {
          setRipples((prev) =>
            prev.filter((ripple) => ripple.id !== newRipple.id)
          );
        }, 600);
      }

      // Button press animation
      setIsPressed(true);
      setTimeout(() => setIsPressed(false), 150);
    }

    onClick?.();
  };

  const baseClasses =
    'relative overflow-hidden transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  // Safe variant class lookup
  const getVariantClass = (variant: string): string => {
    switch (variant) {
      case 'primary':
        return 'bg-p4c-gold text-p4c-navy hover:bg-p4c-goldHover focus:ring-p4c-gold shadow-lg hover:shadow-xl hover:-translate-y-0.5';
      case 'secondary':
        return 'bg-p4c-navy text-white hover:bg-p4c-slate focus:ring-p4c-navy shadow-md hover:shadow-lg';
      case 'ghost':
        return 'bg-transparent text-p4c-navy hover:bg-gray-100 focus:ring-p4c-navy';
      default:
        return 'bg-p4c-gold text-p4c-navy hover:bg-p4c-goldHover focus:ring-p4c-gold shadow-lg hover:shadow-xl hover:-translate-y-0.5';
    }
  };

  // Safe size class lookup
  const getSizeClass = (size: string): string => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm rounded-md';
      case 'md':
        return 'px-4 py-2 text-base rounded-lg';
      case 'lg':
        return 'px-6 py-3 text-lg rounded-xl';
      default:
        return 'px-4 py-2 text-base rounded-lg';
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      className={`${baseClasses} ${getVariantClass(variant)} ${getSizeClass(size)} ${isPressed ? 'scale-95' : ''} ${animate ? 'hover-lift button-press' : ''} ${className}`}
      {...props}
    >
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute animate-ping rounded-full bg-white/30"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            animation: 'ripple 0.6s linear',
          }}
        />
      ))}

      {/* Loading spinner */}
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg className="size-5 animate-spin" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      )}

      <span className={loading ? 'opacity-0' : ''}>{children}</span>
    </button>
  );
};

interface FloatingActionProps {
  children: React.ReactNode;
  onClick?: () => void;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  className?: string;
  'aria-label'?: string;
}

export const FloatingAction: React.FC<FloatingActionProps> = ({
  children,
  onClick,
  position = 'bottom-right',
  className = '',
  'aria-label': ariaLabel = 'Quick action button',
  ...props
}) => {
  // Safe position class lookup
  const getPositionClass = (position: string): string => {
    switch (position) {
      case 'bottom-right':
        return 'bottom-6 right-6';
      case 'bottom-left':
        return 'bottom-6 left-6';
      case 'top-right':
        return 'top-6 right-6';
      case 'top-left':
        return 'top-6 left-6';
      default:
        return 'bottom-6 right-6';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`fixed ${getPositionClass(position)} group z-40 size-14 rounded-full bg-p4c-gold text-p4c-navy shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-p4c-gold focus:ring-offset-2 ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      <div className="flex size-full items-center justify-center transition-transform duration-200 group-hover:scale-110">
        {children}
      </div>

      {/* Pulse animation */}
      <div className="absolute inset-0 animate-ping rounded-full bg-p4c-gold opacity-20" />
    </button>
  );
};

interface ProgressIndicatorProps {
  progress: number; // 0-100
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
  showLabel?: boolean;
  animated?: boolean;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  progress,
  size = 'md',
  color = 'bg-p4c-gold',
  className = '',
  showLabel = false,
  animated = true,
}) => {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayProgress(progress);
      }, 100);
      return () => clearTimeout(timer);
    }
    setDisplayProgress(progress);
    return undefined;
  }, [progress, animated]);

  // Safe size class lookup
  const getSizeClass = (size: string): string => {
    switch (size) {
      case 'sm':
        return 'w-16 h-2';
      case 'md':
        return 'w-24 h-3';
      case 'lg':
        return 'w-32 h-4';
      default:
        return 'w-24 h-3';
    }
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div
        className={`overflow-hidden rounded-full bg-gray-200 ${getSizeClass(size)}`}
      >
        <div
          className={`${color} h-full rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${Math.min(displayProgress, 100)}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-sm font-medium text-gray-700">
          {Math.round(displayProgress)}%
        </span>
      )}
    </div>
  );
};

interface SmoothScrollProps {
  to: string;
  children: React.ReactNode;
  offset?: number;
  duration?: number;
  className?: string;
  'aria-label'?: string;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({
  to,
  children,
  offset = 0,
  className = '',
  'aria-label': ariaLabel,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();

    const targetElement = document.querySelector(to);
    if (targetElement) {
      // Focus the target element for screen readers
      targetElement.setAttribute('tabindex', '-1');
      if ('focus' in targetElement) {
        (targetElement as HTMLElement).focus();
      }

      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`cursor-pointer transition-colors duration-200 hover:text-p4c-gold ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </a>
  );
};

interface StaggeredListProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  className?: string;
}

export const StaggeredList: React.FC<StaggeredListProps> = ({
  children,
  staggerDelay = 100,
  className = '',
}) => (
  <div className={className}>
    {React.Children.map(children, (child, index) => (
      <div
        key={index}
        className="animate-fade-in"
        style={{
          animationDelay: `${index * staggerDelay}ms`,
        }}
      >
        {child}
      </div>
    ))}
  </div>
);

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'border';
}

export const HoverCard: React.FC<HoverCardProps> = ({
  children,
  className = '',
  hoverEffect = 'lift',
}) => {
  // Safe effect class lookup
  const getEffectClass = (effect: string): string => {
    switch (effect) {
      case 'lift':
        return 'hover:-translate-y-2 hover:shadow-xl';
      case 'glow':
        return 'hover:shadow-lg hover:shadow-p4c-gold/20';
      case 'scale':
        return 'hover:scale-105';
      case 'border':
        return 'hover:border-p4c-gold hover:border-2';
      default:
        return 'hover:-translate-y-2 hover:shadow-xl';
    }
  };

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${getEffectClass(hoverEffect)} ${className}`}
    >
      {children}
    </div>
  );
};

interface LoadingDotsProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

export const LoadingDots: React.FC<LoadingDotsProps> = ({
  size = 'md',
  color = 'bg-p4c-gold',
  className = '',
}) => {
  // Safe size class lookup
  const getSizeClass = (size: string): string => {
    switch (size) {
      case 'sm':
        return 'w-1 h-1';
      case 'md':
        return 'w-2 h-2';
      case 'lg':
        return 'w-3 h-3';
      default:
        return 'w-2 h-2';
    }
  };

  return (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${getSizeClass(size)} ${color} animate-bounce rounded-full`}
          style={{
            animationDelay: `${i * 0.1}s`,
            animationDuration: '0.6s',
          }}
        />
      ))}
    </div>
  );
};

// CSS for ripple animation (add to global CSS)

export default AnimatedButton;
