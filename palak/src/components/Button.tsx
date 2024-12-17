import React from "react";

export interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button = ({ onClick, className, children }: ButtonProps) => {
  return (
    <button className={`py-2.5 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
