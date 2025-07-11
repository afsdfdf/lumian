import { ReactNode } from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  "inline-flex items-center justify-center px-6 py-3 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-md relative overflow-hidden",
  {
    variants: {
      variant: {
        primary: "bg-primary text-gray-100 hover:bg-primary-dark shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
        secondary: "bg-secondary text-text-dark hover:bg-secondary-dark shadow-sm hover:shadow-md transform hover:-translate-y-0.5",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-gray-100 transform hover:-translate-y-0.5",
        white: "bg-white text-primary hover:bg-gray-100 shadow-sm hover:shadow-md transform hover:-translate-y-0.5",
        outlineWhite: "border-2 border-gray-200 text-gray-100 hover:bg-white hover:text-primary transform hover:-translate-y-0.5",
        dark: "bg-gray-800 text-gray-100 hover:bg-gray-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
        glass: "bg-white bg-opacity-80 backdrop-filter backdrop-blur-md text-gray-800 hover:bg-opacity-100 shadow-sm hover:shadow-md transform hover:-translate-y-0.5",
        gradient: "bg-gradient-to-r from-primary to-blue-600 text-white hover:from-blue-600 hover:to-primary shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
        accent: "bg-accent text-white hover:bg-accent-dark shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
      },
      size: {
        default: "text-base",
        sm: "text-sm px-4 py-2",
        lg: "text-lg px-8 py-4",
        xl: "text-xl px-10 py-5",
      },
      fullWidth: {
        true: "w-full",
      },
      withIcon: {
        true: "inline-flex items-center gap-2",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
      withIcon: false,
    }
  }
);

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  target?: string;
  ariaLabel?: string;
}

export function Button({
  children,
  href,
  variant,
  size,
  fullWidth,
  withIcon,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  target,
  ariaLabel,
}: ButtonProps) {
  const classes = buttonVariants({ variant, size, fullWidth, withIcon, className });
  
  // Add disabled styling
  const finalClasses = disabled 
    ? `${classes} opacity-60 cursor-not-allowed` 
    : classes;
  
  if (href) {
    return (
      <Link 
        href={href} 
        className={finalClasses} 
        target={target}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      className={finalClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default Button; 