interface ButtonProps{
  loading?:boolean;
  type:string;
  className?:string;
  onClick?:()=>void
}

export const Button = ({ loading, type,className, onClick }:ButtonProps) => {
    return (
      <button
        className={`text-sm font-medium h-11 rounded-md w-full focus-visible:outline-none focus-visible:ring-2  max-w-sm mt-10 text-white bg-blue-800 ${className}`}
        onClick={onClick}
      >
        {type}
        {loading && (
          <span>
            <i className="fa-solid fa-spinner animate-spin ml-2"/>
          </span>
        )}
      </button>
    );
  };