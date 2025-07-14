'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'cta' | 'whatsapp' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    isLoading = false,
    leftIcon,
    rightIcon,
    disabled,
    children,
    ...props 
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-display font-display transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';
    
    const variants = {
      primary: 'bg-brand-500 hover:bg-brand-600 text-white shadow-soft hover:shadow-glow focus:ring-brand-500 transform hover:scale-105 active:scale-95',
      secondary: 'bg-white hover:bg-ghost text-charcoal-900 shadow-soft border border-gray-200 hover:border-brand-300 focus:ring-brand-500',
      cta: 'bg-brand-500 hover:text-gold-500 text-white shadow-soft hover:shadow-glow focus:ring-brand-500 transform hover:scale-105 active:scale-95',
      whatsapp: 'bg-whatsapp hover:bg-green-700 text-white shadow-soft hover:shadow-lg focus:ring-green-500 transform hover:scale-105 active:scale-95',
      outline: 'border-2 border-brand-500 text-brand-500 hover:bg-brand-50 focus:ring-brand-500',
      ghost: 'text-brand-500 hover:bg-brand-50 focus:ring-brand-500',
    };
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm rounded-brand gap-1.5',
      md: 'px-6 py-3 text-base rounded-brand gap-2',
      lg: 'px-8 py-4 text-lg rounded-brand gap-2.5',
      xl: 'px-10 py-5 text-xl rounded-brand gap-3',
    };

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          isLoading && 'pointer-events-none',
          className
        )}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-inherit">
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        
        <div className={cn(
          'flex items-center gap-inherit',
          isLoading && 'opacity-0'
        )}>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </div>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button; 