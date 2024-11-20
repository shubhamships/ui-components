import React from "react";

//add typescript types
//add tailwind color config custom
//base class condition improvements
//Good to have - variant of variantClasses
//lucide react icons
//MOBILE RESPONSIVNES

function Button(props) {
  const {
    title,
    type,
    variant = "default",
    size = "default",
    className,
    onClick,
  }: { title: string; type: any; variant: string; size: string; className: string; onClick?: (event:React.MouseEvent<HTMLButtonElement>) => void} = props;
  const buttonColors = {
    default: "bg-primary text-white border text-medium font-medium shadow hover:bg-blue-800 hover:opacity-90",
    destructive: "bg-destructive text-white font-bold hover:bg-red-background",
    outline: "border bg-white text-black hover:text-black-100 font-bold",
    ghost: "bg-grey-400",
    link: "bg-btn-primary hover:bg-btn-primary-hover text-white border text-white font-bold hover:underline",
    disabled: "bg-grey-400 text-black border border-gray p-3 block hover:hidden cursor-not-allowed",
    dark: "bg-black text-white font-bold hover:bg-black-500",
  };
  const buttonSize = {
    default: "h-9 px-4 py-2",
    xs: "h-6 px-3 py-3",
    sm: "h-8 rounded-md px-4 py-2 text-sm",
    lg: "h-10 rounded-md px-6 py-3",
    xl: "h-11 px-8 py-4 rounded-md w-full max-w-sm",
    icon: "h-10 w-10",
  };
  const baseClasses = "inline-flex justify-center items-center rounded-md text-md";
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
        {title}
      </button>
    </div>
  );
}
export default Button;
