import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  // Base styles
  "bg-gray-800 border border-gray-700 rounded-lg transition-all duration-300",
  {
    variants: {
      variant: {
        default: "hover:border-gray-600",
        elevated: "shadow-lg hover:shadow-xl hover:-translate-y-1",
        bordered: "border-2",
        transparent: "bg-transparent border-gray-600/50",
        gradient: "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-600",
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
      hover: {
        none: "",
        scale: "hover:scale-105",
        lift: "hover:-translate-y-2",
        glow: "hover:shadow-lg hover:shadow-blue-500/20",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
      hover: "none",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hover, children, ...props }, ref) => {
    return (
      <div
        className={cardVariants({ variant, padding, hover, className })}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

// Card Header component
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`border-b border-gray-700 pb-4 mb-4 ${className || ""}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";

// Card Content component
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={className || ""}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardContent.displayName = "CardContent";

// Card Footer component
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`border-t border-gray-700 pt-4 mt-4 ${className || ""}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = "CardFooter";

export default Card;

