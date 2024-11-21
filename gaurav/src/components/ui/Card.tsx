import React from "react";

/**
 * Here are the paramaters for the Card component
 * @param children: React.ReactNode(required) - The children of the card element.
 * @param variant: keyof typeof cardVariants (optional) - The color variant of the card element. Default is "default".
 * @param size: keyof typeof cardSize (optional) - The size variant of the card element. Default is "default".
 * @param className:string (optional) - Additional classes to be added to the card element.
 * 
 */
/**
 * Explanation of props
 * @param children - The children of the card element.
 * @param variant - The color variant of the card element. Default is "default".
 * @param size - The size variant of the card element. Default is "default".
 * @param className - Additional classes to be added to the card element.
 */
interface ICardProps {
  children: React.ReactNode;
  variant?: keyof typeof cardVariants;
  size?: keyof typeof cardSize;
  className: string;
}
const cardVariants = {
  default: "bg-white border border-gray-200",
  primary: "bg-blue-50 border border-blue-200",
  secondary: "bg-gray-50 border border-gray-200",
};

//TODO: remove default margins
const cardSize = {
  default: "mt-1",
  sm: "p-4",
  lg: "p-8",
  
};
function Card({children, variant = "default", size = "default", className, ...props}: ICardProps) {
  const baseClasses = "rounded-lg shadow-sm";
  const sizeClasses = cardSize[size] || cardSize.default;
  const variantClasses = cardVariants[variant] || cardVariants.default;
  return (
    <div className={`${variantClasses} ${baseClasses} ${sizeClasses} ${className || ""}`} {...props}>
      {children}
    </div>
  );
}

export default Card;
