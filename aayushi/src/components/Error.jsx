/* eslint-disable react/prop-types */

const Error = ({ message }) => {
    if (!message) return null;  
  
    return (
      <p className="text-red-500 text-xs font-medium">
        {message}
      </p>
    );
  };
  
  export default Error;