import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  "rounded-xl border transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800",
        primary: "border-blue-100 bg-white dark:border-blue-800 dark:bg-gray-800",
        secondary: "border-gray-100 bg-blue-50 dark:border-gray-700 dark:bg-gray-900",
        glass: "glass-morphism border-transparent",
        glassDark: "glass-morphism-dark border-transparent",
        gradient: "bg-gradient-to-br from-blue-50 to-indigo-50 border-transparent dark:from-gray-800 dark:to-gray-900",
      },
      padding: {
        none: "p-0",
        xs: "p-3",
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
      hover: {
        none: "",
        shadow: "hover:shadow-xl",
        border: "hover:border-blue-300 dark:hover:border-blue-700",
        scale: "hover:scale-105 transform transition-transform duration-300",
        lift: "hover-lift",
        glow: "hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-800/20",
      },
      rounded: {
        default: "rounded-xl",
        sm: "rounded-lg",
        lg: "rounded-2xl",
        full: "rounded-3xl",
        none: "rounded-none",
      },
      shadow: {
        none: "shadow-none",
        sm: "shadow-sm",
        default: "shadow-md",
        lg: "shadow-lg",
        xl: "shadow-xl",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
      hover: "none",
      rounded: "default",
      shadow: "default",
      fullWidth: false,
    }
  }
);

export interface CardProps extends VariantProps<typeof cardVariants> {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({
  children,
  variant,
  padding,
  hover,
  rounded,
  shadow,
  fullWidth,
  className = '',
  onClick,
}: CardProps) {
  const classes = cardVariants({ variant, padding, hover, rounded, shadow, fullWidth, className });
  
  return (
    <div
      className={classes}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Card; 