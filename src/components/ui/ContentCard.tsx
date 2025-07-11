import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const contentCardVariants = cva(
  "p-6 rounded-lg shadow-sm",
  {
    variants: {
      variant: {
        light: "bg-white bg-opacity-90 text-gray-800",
        dark: "bg-gray-800 bg-opacity-90 text-gray-100",
        glass: "bg-white bg-opacity-80 backdrop-filter backdrop-blur-md text-gray-800",
        glassDark: "bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-md text-gray-100",
        overlay: "bg-black bg-opacity-70 text-gray-100",
      },
      bordered: {
        true: "border",
      }
    },
    compoundVariants: [
      {
        variant: "light",
        bordered: true,
        className: "border-gray-200"
      },
      {
        variant: "dark",
        bordered: true,
        className: "border-gray-700"
      },
      {
        variant: "glass",
        bordered: true,
        className: "border-gray-200"
      },
      {
        variant: "glassDark",
        bordered: true,
        className: "border-gray-700"
      },
    ],
    defaultVariants: {
      variant: "light",
      bordered: false,
    }
  }
);

export interface ContentCardProps extends VariantProps<typeof contentCardVariants> {
  children: ReactNode;
  className?: string;
}

export function ContentCard({
  children,
  variant,
  bordered,
  className = '',
}: ContentCardProps) {
  const classes = contentCardVariants({ variant, bordered, className });
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export default ContentCard; 