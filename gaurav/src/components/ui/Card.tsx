import React from "react";

interface ICardProps {
    children: React.ReactNode;
    variant: string;
    size: string;
    className: string;
    
}
function Card({
    children,
    variant = "default",
    size = "default",
    className,
    ...props
  }: { children: React.ReactNode; variant?: string; size?: string; className?: string }) {
    const cardVariants = {
      default: "bg-white border border-gray-200",
      primary: "bg-blue-50 border border-blue-200",
      secondary: "bg-gray-50 border border-gray-200",
    };
    const cardSize = {
      default: "mt-1",
      sm: "p-4",
      lg: "p-8",
    };
  
    const baseClasses = "rounded-lg shadow-sm";
    const sizeClasses = cardSize[size] || cardSize.default;
    const variantClasses = cardVariants[variant] || cardVariants.default;
  
    return (
      <div
        className={`${variantClasses} ${baseClasses} ${sizeClasses} ${
          className || ""
        }`}
        {...props}
      >
        {children}
      </div>
    );
  }
  
  export default Card;