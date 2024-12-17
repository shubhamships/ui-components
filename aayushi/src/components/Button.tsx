interface ButtonProps {
  loading?: boolean;
  type: string;
  className?: string;
  onClick?: () => void;
  width?: string; 
}

export const Button = ({ loading, type, className, onClick, width }: ButtonProps) => {
  return (
    <button
      className={`text-sm font-medium h-11 rounded-md focus-visible:outline-none focus-visible:ring-2 max-w-sm mt-10 text-white bg-blue-800 ${className} ${width || 'w-full'}`}
      onClick={onClick} 
    >
      {type}
      {loading && (
        <span>
          <i className="fa-solid fa-spinner animate-spin ml-2" />
        </span>
      )}
    </button>
  );
};
