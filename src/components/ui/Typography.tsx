'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

// Heading Components
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  gradient?: boolean;
  align?: 'left' | 'center' | 'right';
}

export const H1 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, gradient = false, align = 'left', children, ...props }, ref) => (
    <h1
      className={cn(
        'heading-1',
        gradient && 'text-gradient',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </h1>
  )
);

H1.displayName = 'H1';

export const H2 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, gradient = false, align = 'left', children, ...props }, ref) => (
    <h2
      className={cn(
        'heading-2',
        gradient && 'text-gradient',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </h2>
  )
);

H2.displayName = 'H2';

export const H3 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, gradient = false, align = 'left', children, ...props }, ref) => (
    <h3
      className={cn(
        'heading-3',
        gradient && 'text-gradient',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </h3>
  )
);

H3.displayName = 'H3';

// Body Text Components
export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'default' | 'muted' | 'accent' | 'white';
  align?: 'left' | 'center' | 'right';
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ 
    className, 
    size = 'base', 
    weight = 'normal', 
    color = 'default',
    align = 'left',
    children, 
    ...props 
  }, ref) => {
    const sizeClasses = {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl md:text-2xl',
    };

    const weightClasses = {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    };

    const colorClasses = {
      default: 'text-midnight-950',
      muted: 'text-midnight-900/70',
      accent: 'text-brass-900',
      white: 'text-cream-50',
    };

    const alignClasses = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    };

    return (
      <p
        className={cn(
          'leading-relaxed',
          sizeClasses[size],
          weightClasses[weight],
          colorClasses[color],
          alignClasses[align],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = 'Text';

// Specialized Text Components
export const Lead = forwardRef<HTMLParagraphElement, Omit<TextProps, 'size'>>(
  ({ className, children, ...props }, ref) => (
    <Text
      size="xl"
      className={cn('body-large mb-8 max-w-3xl', className)}
      ref={ref}
      {...props}
    >
      {children}
    </Text>
  )
);

Lead.displayName = 'Lead';

export const Caption = forwardRef<HTMLParagraphElement, Omit<TextProps, 'size'>>(
  ({ className, children, ...props }, ref) => (
    <Text
      size="sm"
      color="muted"
      className={cn('text-xs uppercase tracking-wide font-medium', className)}
      ref={ref}
      {...props}
    >
      {children}
    </Text>
  )
);

Caption.displayName = 'Caption';

// Link Component
export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: 'default' | 'muted' | 'accent';
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ 
    className, 
    href, 
    external = false, 
    variant = 'default',
    children, 
    ...props 
  }, ref) => {
    const variants = {
      default: 'text-brass-900 hover:text-brass-800 underline decoration-1 underline-offset-2 hover:decoration-2',
      muted: 'text-midnight-900/70 hover:text-midnight-900 underline decoration-1 underline-offset-2 hover:decoration-2',
      accent: 'text-brass-900 hover:text-brass-800 font-medium no-underline hover:underline',
    };

    return (
      <a
        href={href}
        className={cn(
          'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brass-900 focus:ring-offset-2 rounded-sm',
          variants[variant],
          className
        )}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        ref={ref}
        {...props}
      >
        {children}
        {external && (
          <span className="ml-1 text-xs">
            ↗
          </span>
        )}
      </a>
    );
  }
);

Link.displayName = 'Link'; 