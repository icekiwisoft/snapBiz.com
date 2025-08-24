import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const progressVariants = cva(
  // Base styles
  "w-full bg-gray-700 rounded-full overflow-hidden",
  {
    variants: {
      size: {
        sm: "h-2",
        md: "h-3",
        lg: "h-4",
        xl: "h-6",
      },
      variant: {
        default: "bg-gray-700",
        primary: "bg-gray-700",
        success: "bg-gray-700",
        warning: "bg-gray-700",
        danger: "bg-gray-700",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

const progressBarVariants = cva(
  // Progress bar styles
  "h-full transition-all duration-500 ease-out",
  {
    variants: {
      variant: {
        default: "bg-blue-500",
        primary: "bg-gradient-to-r from-blue-500 to-purple-600",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        danger: "bg-red-500",
      },
      animated: {
        true: "animate-pulse",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      animated: false,
    },
  }
);

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
  value: number;
  max?: number;
  showLabel?: boolean;
  labelPosition?: 'top' | 'bottom' | 'left' | 'right';
  showPercentage?: boolean;
  animated?: boolean;
  striped?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ 
    className, 
    value, 
    max = 100, 
    showLabel = false, 
    labelPosition = 'top',
    showPercentage = false,
    animated = false,
    striped = false,
    size,
    variant,
    children,
    ...props 
  }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    
    const labelClasses = {
      top: "flex-col space-y-2",
      bottom: "flex-col-reverse space-y-reverse space-y-2",
      left: "flex-row space-x-3",
      right: "flex-row-reverse space-x-reverse space-x-3",
    };
    
    const progressContent = (
      <div className={`flex ${labelClasses[labelPosition]} ${className || ""}`}>
        {showLabel && children && (
          <div className="flex-shrink-0">
            {children}
          </div>
        )}
        
        <div className="flex-1">
          <div className={progressVariants({ size, variant })} ref={ref} {...props}>
            <div
              className={`${progressBarVariants({ variant, animated })} ${
                striped ? 'bg-stripes' : ''
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          
          {showPercentage && (
            <div className="mt-2 text-right">
              <span className="text-sm text-gray-400">
                {Math.round(percentage)}%
              </span>
            </div>
          )}
        </div>
      </div>
    );
    
    return progressContent;
  }
);

Progress.displayName = "Progress";

export default Progress;

