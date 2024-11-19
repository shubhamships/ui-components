import React from "react";

function InputField({ name, type, label, placeholder, value, onChange, isRequired }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-normal" htmlFor={name}>
        {label} {isRequired && <span className="text-red-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-10 w-96 px-3 py-2 text-sm border border-gray-300 rounded-md"
      />
    </div>
  );
}

export default InputField;
