import Required from "./Required";

interface InputProps {
  type: string;
  name: string;
  value: string;
  onChange: any;
  lableTitle: string;
  placeholder?: string;
  className?: string;
}
function FormInput({ type, name, value, onChange, placeholder, className, lableTitle }: InputProps) {
  return (
    <div className="flex flex-col space-y-1">
      <div className="flex">
        <label htmlFor="" className="text-sm font-normal">
          {lableTitle}
        </label>
        <Required />
      </div>
      <div className="flex items-end relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`border-gray-300 border flex h-10 w-full rounded-md px-3 py-2 text-sm ${className}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default FormInput;
