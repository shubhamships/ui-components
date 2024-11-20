import React from "react";

interface FormInputProps {
  name?: string;
  type: string;
  label: string;
  placeholder?: string;
  value: any;
  onChange: () => void;
  isRequired?: boolean;
  children:any
}

function FormInput({
  name = "input-field",
  type,
  label,
  placeholder = "Enter text....",
  value,
  onChange,
  isRequired = false,
  children
}: FormInputProps) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-normal">
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

export default FormInput;
