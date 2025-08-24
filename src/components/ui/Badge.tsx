import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  // Base styles
  "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "bg-gray-700 text-gray-300",
        primary: "bg-blue-600 text-white",
        secondary: "bg-purple-600 text-white",
        success: "bg-green-600 text-white",
        warning: "bg-yellow-600 text-white",
        danger: "bg-red-600 text-white",
        info: "bg-blue-500 text-white",
        outline: "border border-gray-600 text-gray-300",
        gradient: "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
      rounded: {
        full: "rounded-full",
        lg: "rounded-lg",
        md: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "full",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, rounded, children, icon, iconPosition = 'left', ...props }, ref) => {
    return (
      <span
        className={badgeVariants({ variant, size, rounded, className })}
        ref={ref}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <span className="mr-1">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="ml-1">{icon}</span>
        )}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
