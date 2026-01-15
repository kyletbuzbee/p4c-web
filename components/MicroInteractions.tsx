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
  // ariaLabel is already extracted from props
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

  const variantClasses = {
    primary:
      'bg-p4c-gold text-p4c-navy hover:bg-p4c-goldHover focus:ring-p4c-gold shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    secondary:
      'bg-p4c-navy text-white hover:bg-p4c-slate focus:ring-p4c-navy shadow-md hover:shadow-lg',
    ghost: 'bg-transparent text-p4c-navy hover:bg-gray-100 focus:ring-p4c-navy',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-xl',
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      disabled={disabled || loading}
      /* eslint-disable security/detect-object-injection */
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${isPressed ? 'scale-95' : ''} ${animate ? 'hover-lift button-press' : ''} ${className}`}
      /* eslint-enable security/detect-object-injection */
      {...props}
    >
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ping"
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
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
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
  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6',
  };

  return (
    <button
      onClick={onClick}
      /* eslint-disable security/detect-object-injection */
      className={`fixed ${positionClasses[position]} z-40 w-14 h-14 bg-p4c-gold text-p4c-navy rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-p4c-gold focus:ring-offset-2 group ${className}`}
      /* eslint-enable security/detect-object-injection */
      aria-label={ariaLabel}
      {...props}
    >
      <div className="flex items-center justify-center w-full h-full group-hover:scale-110 transition-transform duration-200">
        {children}
      </div>

      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-p4c-gold animate-ping opacity-20" />
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

  const sizeClasses = {
    sm: 'w-16 h-2',
    md: 'w-24 h-3',
    lg: 'w-32 h-4',
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div
        /* eslint-disable security/detect-object-injection */
        className={`bg-gray-200 rounded-full overflow-hidden ${sizeClasses[size]}`}
        /* eslint-enable security/detect-object-injection */
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
      className={`transition-colors duration-200 hover:text-p4c-gold cursor-pointer ${className}`}
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
  const effectClasses = {
    lift: 'hover:-translate-y-2 hover:shadow-xl',
    glow: 'hover:shadow-lg hover:shadow-p4c-gold/20',
    scale: 'hover:scale-105',
    border: 'hover:border-p4c-gold hover:border-2',
  };

  return (
    <div
      /* eslint-disable security/detect-object-injection */
      className={`transition-all duration-300 ease-in-out ${effectClasses[hoverEffect]} ${className}`}
      /* eslint-enable security/detect-object-injection */
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
  const sizeClasses = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
  };

  return (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          /* eslint-disable security/detect-object-injection */
          className={`${sizeClasses[size]} ${color} rounded-full animate-bounce`}
          /* eslint-enable security/detect-object-injection */
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