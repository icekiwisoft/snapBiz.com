import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const toggleVariants = cva(
  // Base styles
  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-gray-600 hover:bg-gray-500",
        primary: "bg-blue-600 hover:bg-blue-700",
        success: "bg-green-600 hover:bg-green-700",
        warning: "bg-yellow-600 hover:bg-yellow-700",
        danger: "bg-red-600 hover:bg-red-700",
      },
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const thumbVariants = cva(
  // Thumb styles
  "inline-block transform rounded-full bg-white transition-transform duration-200",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface ToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof toggleVariants> {
  label?: string;
  description?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showLabel?: boolean;
  labelPosition?: 'left' | 'right' | 'top' | 'bottom';
}

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ 
    className, 
    variant, 
    size, 
    label, 
    description, 
    leftIcon, 
    rightIcon, 
    showLabel = true,
    labelPosition = 'right',
    id,
    ...props 
  }, ref) => {
    const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;
    
    const labelClasses = {
      left: "flex-row-reverse",
      right: "flex-row",
      top: "flex-col",
      bottom: "flex-col-reverse",
    };
    
    return (
      <div className={`flex items-center ${labelClasses[labelPosition]} space-x-3 ${className || ""}`}>
        {showLabel && label && (
          <div className="flex-1">
            <label 
              htmlFor={toggleId}
              className="block text-sm font-medium text-gray-300 cursor-pointer"
            >
              {label}
            </label>
            {description && (
              <p className="text-sm text-gray-400 mt-1">{description}</p>
            )}
          </div>
        )}
        
        <div className="flex items-center space-x-2">
          {leftIcon && <span className="text-gray-400">{leftIcon}</span>}
          
          <div className="relative">
            <input
              ref={ref}
              id={toggleId}
              type="checkbox"
              className="sr-only"
              {...props}
            />
            <label
              htmlFor={toggleId}
              className={`${toggleVariants({ variant, size })} cursor-pointer ${
                props.checked ? 'bg-blue-600' : ''
              }`}
            >
              <span
                className={`${thumbVariants({ size })} ${
                  props.checked 
                    ? size === 'sm' ? 'translate-x-4' : size === 'lg' ? 'translate-x-7' : 'translate-x-5'
                    : 'translate-x-1'
                }`}
              />
            </label>
          </div>
          
          {rightIcon && <span className="text-gray-400">{rightIcon}</span>}
        </div>
      </div>
    );
  }
);

Toggle.displayName = "Toggle";

export default Toggle;
