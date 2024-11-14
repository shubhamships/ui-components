/* eslint-disable react/prop-types */

export const Button = ({ loading, type, onClick }) => {
  return (
    <button className="  text-sm font-medium h-11 rounded-md w-full focus-visible:outline-none focus-visible:ring-2  max-w-sm mt-10 text-white bg-blue-800"  onClick={onClick}>
      {type}
     
      {loading && (
        <span>
          <i className="fa-solid fa-spinner animate-spin ml-2"></i>
        </span>
      )}
    </button>
  );
};
