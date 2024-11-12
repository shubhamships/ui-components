/* eslint-disable react/prop-types */
function Card({
  children,
  variant = "default",
  size = "default",
  className,
  ...props
}) {
  const cardVariants = {
    default: "bg-white border border-gray-200",
    primary: "bg-blue-50 border border-blue-200",
    secondary: "bg-gray-50 border border-gray-200",
  };

  const cardSize = {
    default: "p-6",
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
