import React, { Children } from "react";

//add typescript types
//add tailwind color config custom
//base class condition improvements
//Good to have - variant of variantClasses
//lucide react icons
//MOBILE RESPONSIVNES

interface IButtonProps {
  title: string;
  type: any;
  variant: keyof typeof buttonColors;
  size: keyof typeof buttonSize;
  className: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
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

function Button(props: any) {
  const { title, type, variant = "default", size = "default", className, onClick, children }: IButtonProps = props;

  const baseClasses = "inline-flex justify-center items-center shadow-md focus:outline-none whitespace-nowrap";
  const sizeClasses = buttonSize[size] || buttonSize.default;
  const variantClasses = buttonColors[variant] || buttonColors.default;

  //className={`${variantClasses} ${baseClasses} ${sizeClasses} ${className || ''}
  return (
    <div>
      <button
        onClick={onClick}
        className={`${variantClasses} ${baseClasses} ${sizeClasses} ${className || ""}`}
        type={type}
      >
        <span>{children}</span>{title}
      </button>
    </div>
  );
}
export default Button;
