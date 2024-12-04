import Required from "./Required";

interface InputProps {
  type?: string;
  name?: string;
  value?: string;
  onChange?: any;
  lableTitle?: string;
  placeholder?: string;
  className?: string;
  labelvarient?: keyof typeof labelSize;
  inputvarient?: keyof typeof inputSize;
}
const inputSize = {
  default: "",
  m: "border-gray-300 border flex h-10 w-full rounded-md px-3 py-2 text-sm",
  lg: "border border-gray-200 rounded-lg p-4 w-full",
};
const labelSize = {
  default: "",
  m: "text-sm font-normal",
};
function FormInput({
  type,
  name,
  value,
  onChange,
  placeholder,
  className,
  lableTitle,
  labelvarient = "default",
  inputvarient = "default",
}: InputProps) {
  const labelSizeClass = labelSize[labelvarient];
  const inputSizeClass = inputSize[inputvarient];

  return (
    <div className="flex flex-col space-y-1">
      <div className="flex">
        <label htmlFor="" className={labelSizeClass}>
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
          className={`${inputSizeClass} ${className}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default FormInput;
