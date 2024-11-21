interface buttonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}
const Button = ({ onClick, className, children }: buttonProps) => {
  return (
    <button
      className={`text-sm font-medium h-11 rounded-md w-full focus-visible:outline-none focus-visible:ring-2 max-w-sm mt-10 text-white bg-blue-800 hover:bg-blue-700 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
