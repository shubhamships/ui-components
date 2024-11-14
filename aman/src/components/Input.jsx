import React from "react";

function Input({ type, name, value, onChange, placeholder, className }) {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`border-gray-300 border-[1px] flex h-10 w-full rounded-md px-3 py-2 text-sm ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
