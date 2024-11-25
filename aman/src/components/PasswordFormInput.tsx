import { useState } from "react";
import Required from "./Required";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";

interface InputProps {
  value: string;
  onChange: (e: any) => void;
  lableTitle: string;
  placeholder?: string;
  className?: string;
}
function PasswordFormInput({ value, onChange, placeholder, className, lableTitle }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleShow = () => {
    setShowPassword(!showPassword);
  };
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
          type={showPassword ? "text" : "password"}
          name="password"
          value={value}
          onChange={onChange}
          className={`border-gray-300 border flex h-10 w-full rounded-md px-3 py-2 text-sm ${className}`}
          placeholder={placeholder}
        />

        {showPassword ? (
          <LuEye className="absolute right-4 bottom-3 cursor-pointer text-xl" onClick={handleShow} />
        ) : (
          <LuEyeOff className="absolute right-4 bottom-3 cursor-pointer text-xl" onClick={handleShow} />
        )}
      </div>
    </div>
  );
}

export default PasswordFormInput;
