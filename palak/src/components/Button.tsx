interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button = ({ onClick, className, children }: ButtonProps) => {
  return (
    <button className={`h-10 mx-auto rounded-md p-2 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
