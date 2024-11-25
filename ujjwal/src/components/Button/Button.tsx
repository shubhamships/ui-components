import React from "react";

/*
 * Here are the paramaters for the Button component
 * @param title:string(required) - Button text to display on the button element
 * @param title:React.ButtonHTMLAttributes<HTMLButtonElement>['type'] (optional) - The type of the button element (e.g., "button", "submit", "reset").
 * @param variant: keyof typeof buttonColors (optional) - The color variant of the button element. Default is "default".
 * @param size: keyof typeof buttonSize (optional) - The size variant of the button element. Default is "default".
 * @param className:string (optional) - Additional classes to be added to the button element.
 * @param onClick: (event: React.MouseEvent<HTMLButtonElement>) => void (optional) - The function to be called when the button is clicked.
 * @param children: React.ReactNode (optional) - The children of the button element.
 * @param iconName: React.ReactNode (optional) - The icon to be displayed on the button element.
 *
 */
/*
 * Explanation of props
 * @param title - The text to be displayed on the button
 * @param type - The type of the button element (e.g., "button", "submit", "reset").
 * @param variant - The color variant of the button element. Default is "default".
 * @param size - The size variant of the button element. Default is "default".
 * @param className - Additional classes to be added to the button element.
 * @param onClick - The function to be called when the button is clicked.
 * @param children - The children of the button element.
 * @param iconName - The icon to be displayed on the button element.
 */

interface IButtonProps {
  title: string;
  type?: any;
  variant?: keyof typeof buttonColors;
  size?: keyof typeof buttonSize;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  iconName?: React.ReactNode;
  disabled?: any;
}
const buttonColors = {
  default:
    "bg-primary text-white border shadow hover:bg-blue-800 hover:opacity-90 hover:focus:ring-1 focus:ring-offset-2 focus:ring-offset-primary focus:ring-primary",
  secondary: "bg-secondary text-black border shadow hover:opacity-75",
  soft: "bg-soft text-primary opacity-75 border shadow hover:opacity-75 border-blue",
  destructive: "bg-destructive text-white hover:opacity-75",
  success: "bg-success text-white hover:opacity-75",
  outline: "border bg-white text-black hover:text-black-100 ",
  ghost: "bg-grey-400 text-black border-none shadow-none text-gray-600 hover:bg-gray-100",
  link: "hover:bg-btn-primary-hover text-primary border hover:underline border-none shadow-none",
  disabled: "bg-grey-400 text-black border border-gray p-3 block hover:hidden cursor-not-allowed",
  dark: "bg-black text-white hover:bg-black-500",
  withIcon: " text-black/75 border shadow hover:opacity-75",
};
const buttonSize = {
  default: "h-9 px-4 py-2 font-medium rounded-md",
  xs: "h-6 px-3 py-1 text-xs font-semibold rounded-md",
  sm: "h-8 rounded-md px-4 py-2 text-sm font-medium rounded-md",
  lg: "h-10 rounded-md px-6 py-3 text-lg font-medium rounded-md",
  xl: "h-11 px-8 py-4 rounded-md w-full max-w-sm text-lg font-medium rounded-md",
  icon: "h-10 w-10 p-1 rounded-full",
};

function Button({
  title,
  type = "button",
  variant = "default",
  size = "default",
  disabled,
  className,
  onClick,
  iconName,
}: IButtonProps) {
  const baseClasses = "inline-flex justify-center items-center shadow-md focus:outline-none whitespace-nowrap";
  const sizeClasses = buttonSize[size] || buttonSize.default;
  const variantClasses = buttonColors[variant] || buttonColors.default;
  return (
    <div>
      <button
        onClick={onClick}
        className={`${variantClasses} ${baseClasses} ${sizeClasses} ${className || ""}`}
        type={type}
        disabled={disabled}
      >
        <span>{iconName}</span>
        {title}
      </button>
    </div>
  );
}
export default Button;
