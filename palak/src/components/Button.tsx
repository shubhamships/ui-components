import React from "react";

export interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button = ({ onClick, className, children }: ButtonProps) => {
  return (
    <button className={`h-10 rounded-md text-sm p-2.5 ${className} hover:scale-105 duration-500`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
