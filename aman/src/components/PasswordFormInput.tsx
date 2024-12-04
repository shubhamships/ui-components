import { useState } from "react";
import Required from "./Required";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";

interface InputProps {
  value?: string;
  onChange?: (e: any) => void;
  lableTitle?: string;
  placeholder?: string;
  className?: string;
  labelvarient?: keyof typeof labelSize;
  inputvarient?: keyof typeof inputSize;
}
const inputSize = {
  default: "",
  m: "border-gray-300 border flex h-10 w-full rounded-md px-3 py-2 text-sm",
  lg: "border border-gray-200 rounded-md p-4 w-full",
};
const labelSize = {
  default: "",
  m: "text-sm font-normal",
};
function PasswordFormInput({
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
  const [showPassword, setShowPassword] = useState(false);
  const handleShow = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col space-y-1">
      <div className="flex">
        <label htmlFor="" className={labelSizeClass}>
          {lableTitle}
        </label>
        <Required />
      </div>
      <div className="flex items-end">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={value}
          onChange={onChange}
          className={`${inputSizeClass} ${className}`}
          placeholder={placeholder}
        />
        <div className="self-center -ml-8 cursor-pointer text-xl">
          {showPassword ? <LuEye onClick={handleShow} /> : <LuEyeOff onClick={handleShow} />}
        </div>
      </div>
    </div>
  );
}

export default PasswordFormInput;
