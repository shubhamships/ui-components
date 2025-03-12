import { ReactNode } from "react";

interface ButtonComponentProps {
  text: string;
  icon?: ReactNode;
  className?: string;
}
export const Button = ({ text, className, icon }: ButtonComponentProps) => {
  return (
    <button
      className={`text-xs lg:text-sm md:text-sm border-2 rounded inline-flex items-center justify-center ${className}`}
    >
      {text}
      {icon && <span className="mr-2">{icon}</span>}
    </button>
  );
};

export default Button;
