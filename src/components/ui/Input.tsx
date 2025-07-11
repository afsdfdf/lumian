import { forwardRef, InputHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  "w-full px-4 py-3 border transition-colors focus:outline-none focus:ring-1",
  {
    variants: {
      variant: {
        default: "border-border focus:border-primary focus:ring-primary",
        error: "border-red-500 focus:border-red-500 focus:ring-red-500",
      },
      inputSize: {
        default: "py-3",
        sm: "py-2 text-sm",
        lg: "py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    }
  }
);

export interface InputProps 
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, 
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', variant, inputSize, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={props.id} 
            className="block text-sm font-medium text-text-medium mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={inputVariants({ variant: error ? "error" : variant, inputSize, className })}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input; 