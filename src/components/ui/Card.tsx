'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'soft' | 'brand' | 'glow' | 'flat';
  size?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'md',
    hover = false,
    children,
    ...props 
  }, ref) => {
    // Brand Identity: 12px radius, ≤ 150ms transitions
    const baseClasses = 'rounded-brand transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variants = {
      default: 'bg-white border border-gray-200 shadow-sm hover:shadow-md focus:ring-gray-500',
      // Brand Identity: Ghost White background with soft shadows
      soft: 'bg-white rounded-brand shadow-soft border border-gray-100',
      // Brand Identity: Ghost White background with brand border
      brand: 'bg-ghost rounded-brand shadow-soft border border-brand-200',
      // Brand Identity: Royal Indigo glow effect
      glow: 'bg-white rounded-brand shadow-glow border border-brand-200 focus:ring-brand-500',
      flat: 'bg-gray-50 border border-gray-100 hover:bg-white hover:border-gray-200',
    };
    
    const sizes = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };

    const hoverClasses = hover ? 'hover:scale-105 hover:shadow-lg cursor-pointer' : '';

    return (
      <div
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          hoverClasses,
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card subcomponents for better composition
export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      className={cn('mb-4', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3
      className={cn('text-xl font-display font-display text-charcoal-900 leading-tight', className)} // Brand Identity: Poppins display font, Charcoal color
      ref={ref}
      {...props}
    >
      {children}
    </h3>
  )
);

CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => (
    <p
      className={cn('text-gray-600 font-sans leading-relaxed', className)} // Brand Identity: Inter body font
      ref={ref}
      {...props}
    >
      {children}
    </p>
  )
);

CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      className={cn('', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      className={cn('mt-6 pt-4 border-t border-gray-100', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

CardFooter.displayName = 'CardFooter';

export default Card; 