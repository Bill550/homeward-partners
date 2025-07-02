// src/components/UI/Button/Button.tsx
import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { ButtonProps } from '../../../types';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonProps {
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, Props & Partial<MotionProps>>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      loadingText,
      leftIcon,
      rightIcon,
      fullWidth = false,
      animate = true,
      disabled,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseClasses = clsx(
      // Base styles
      'relative inline-flex items-center justify-center',
      'font-semibold transition-all duration-300 ease-out',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-60',
      'overflow-hidden group',

      // Size variants
      {
        'px-3 py-1.5 text-sm rounded-lg': size === 'sm',
        'px-6 py-3 text-base rounded-xl': size === 'md',
        'px-8 py-4 text-lg rounded-2xl': size === 'lg',
        'px-10 py-5 text-xl rounded-3xl': size === 'xl',
      },

      // Variant styles
      {
        // Primary
        'bg-gradient-to-r from-accent-500 to-primary-500 text-white shadow-colored hover:shadow-colored-lg hover:scale-105 focus:ring-accent-500':
          variant === 'primary',

        // Secondary  
        'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-teal hover:shadow-teal-lg hover:scale-105 focus:ring-primary-500':
          variant === 'secondary',

        // Outline
        'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white hover:scale-105 focus:ring-primary-500 bg-white':
          variant === 'outline',

        // Ghost
        'text-primary-500 hover:bg-primary-50 hover:text-primary-600 focus:ring-primary-500':
          variant === 'ghost',

        // White
        'bg-white text-primary-600 shadow-lg hover:shadow-xl hover:scale-105 focus:ring-primary-500 hover:bg-gray-50':
          variant === 'white',
      },

      // Full width
      { 'w-full': fullWidth },

      className
    );

    const shimmerClasses = 'absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700';

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || isLoading) return;

      // Ripple effect
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const ripple = document.createElement('span');
      ripple.className = 'absolute rounded-full bg-white/30 pointer-events-none animate-ping';
      ripple.style.cssText = `
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
      `;

      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);

      onClick?.(e);
    };

    const motionProps = animate
      ? {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        transition: { type: "spring" as const, stiffness: 400, damping: 17 },
      }
      : {};

    const ButtonComponent = animate ? motion.button : 'button';

    return (
      <ButtonComponent
        ref={ref}
        className={baseClasses}
        disabled={disabled || isLoading}
        onClick={handleClick}
        {...motionProps}
        {...props}
      >
        {/* Shimmer effect for primary and secondary variants */}
        {(variant === 'primary' || variant === 'secondary') && (
          <span className={shimmerClasses} />
        )}

        {/* Content */}
        <span className="relative flex items-center gap-2">
          {isLoading ? (
            <>
              <svg
                className="h-4 w-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  fill="currentColor"
                />
              </svg>
              {loadingText || 'Loading...'}
            </>
          ) : (
            <>
              {leftIcon && <span className="shrink-0">{leftIcon}</span>}
              {children}
              {rightIcon && <span className="shrink-0">{rightIcon}</span>}
            </>
          )}
        </span>
      </ButtonComponent>
    );
  }
);

Button.displayName = 'Button';

export default Button;