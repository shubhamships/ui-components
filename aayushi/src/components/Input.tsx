import React from "react";

interface InputProps {
  type: string; 
  placeholder: string; 
  className?: string;
  value: string | number; 
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  id?: string; 
  name?: string; 
}

export const Input: React.FC<InputProps> = ({
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
