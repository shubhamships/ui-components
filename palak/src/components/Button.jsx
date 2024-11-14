// import { Children } from "react";
// import withLoading from "./withLoading";
const Button = ({ onClick, className, children }) => {
  return (
    <button
      className={`text-sm font-medium h-11 rounded-md w-full focus-visible:outline-none focus-visible:ring-2  max-w-sm mt-10 text-white bg-blue-800 hover:bg-blue-700 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
    // <div>
    //   {isLoading ? (
    //     <div className="flex opacity-40 flex-row">
    //       <div>
    //         <button
    //           className={`text-sm font-medium h-11 rounded-md w-full focus-visible:outline-none focus-visible:ring-2  max-w-sm mt-10 text-white bg-blue-800 hover:bg-blue-700 ${className}`}
    //           onClick={onClick}
    //         >
    //           {name}
    //         </button>
    //       </div>
    //       <div className="w-4 h-4 border-4 ml-2 mt-0.5 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    //     </div>
    //   ) : (
    //     <button
    //       className={`text-sm font-medium h-11 rounded-md w-full focus-visible:outline-none focus-visible:ring-2  max-w-sm mt-10 text-white bg-blue-800 hover:bg-blue-700 ${className}`}
    //       onClick={onClick}
    //     >
    //       {name}
    //     </button>
    //   )}
    // </div>
  );
};
export default Button;
