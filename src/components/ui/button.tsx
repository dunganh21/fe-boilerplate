import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'md', children, className, ...props },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClasses = {
      primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
      secondary: 'bg-accent text-primary hover:bg-accent/80 focus:ring-accent',
      outline:
        'border border-primary-dark text-primary hover:bg-primary-dark hover:text-white focus:ring-primary-dark',
      ghost: 'text-primary hover:bg-primary/10 focus:ring-primary',
    };

    const sizeClasses = {
      sm: 'h-8 px-4 text-sm rounded-button',
      md: 'h-10 px-6 text-base rounded-button',
      lg: 'h-12 px-8 text-lg rounded-button',
      xl: 'h-14 px-10 text-xl rounded-button',
    };

    const classes = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
