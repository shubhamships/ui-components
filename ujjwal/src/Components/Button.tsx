import { ReactNode } from "react";

interface ButtonProps {
  onClick?: any;
  type?: "submit" | "reset" | "button" | undefined;
  children?: ReactNode;
  className?: string;
}
function Button({ onClick, type, children, className }: ButtonProps) {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={`w-full flex items-center justify-center bg-blue-900 rounded-md text-white p-3 ${className}`}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
