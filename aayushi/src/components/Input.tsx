/* eslint-disable react/prop-types */

export const Input = ({
    type,
    placeholder,
    className = "",
    value,
    onChange,
    id,
    name,
  }) => {
    return (
      <div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          id={id}
          name={name}
          className={`border rounded-md w-full py-2 mb-2 px-3 flex h-10 text-sm focus-visible:outline-none focus-visible:ring-1 focus:ring-blue-800 ${className}`}
        />
      </div>
    );
  };