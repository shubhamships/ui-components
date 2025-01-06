interface InputFieldProps {
  name?: string;
  type?: string;
  label?: string;
  className?: string;
  placeholder?: string;
  value?: string | number | undefined;
  onChange?: any;
  isRequired?: boolean;
}

function InputField({ name, type, className, label, placeholder, value, onChange, isRequired }: InputFieldProps) {
  return (
    <div className="space-y-1">
      <label className={`text-sm font-normal`}>
        {label} {isRequired && <span className="text-red-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`h-10 w-96 px-3 py-2 text-sm border border-gray-300 rounded-md ${className}`}
      />
    </div>
  );
}

export default InputField;
