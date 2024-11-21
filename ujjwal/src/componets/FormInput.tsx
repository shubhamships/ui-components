import { Mail, CircleUserRound, MapPin, Plus, Search } from "lucide-react";
import { useState } from "react";

interface FormInputProps {
  name?: string;
  type: string;
  label?: string;
  placeholder?: string;
  value: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  children?: any;
  className?: string;
  variant?: keyof typeof colorCombination;
  size?: keyof typeof InputSize;
  icon?: keyof typeof Icon;
  isFloatingLabel?: boolean;
}

const colorCombination = {
  default: "text-white bg-gray-600 p-2 focus:ring-2 focus:ring-teal-400 appearance-non",
  blue: "text-white bg-gray-600 p-2 focus:ring-2 focus:ring-sky-400 appearance-non",
  green: "text-white bg-gray-600 p-2 focus:ring-2 focus:ring-lime-400 appearance-non",
  yellow: "text-white bg-gray-600 p-2 focus:ring-2 focus:ring-yellow-300 appearance-non",
  red: "text-white bg-gray-600 p-2 focus:ring-2 focus:ring-pink-500 appearance-non",
};

const InputSize = {
  sm: "text-xs px-2 py-1 border border-gray-200 rounded-md w-48 h-10",
  md: "text-sm px-3 py-2 border border-gray-200 rounded-lg w-1/4 h-12",
  lg: "text-md px-4 py-3 border border-gray-200 rounded-2xl w-2/4 h-14",
  xl: "text-lg px-5 py-4 border border-gray-200 rounded-3xl w-3/4 h-16",
};

const Icon = {
  default: null,
  search: <Search />,
  mail: <Mail />,
  location: <MapPin />,
  number: <Plus />,
  person: <CircleUserRound />,
};

function FormInput({
  name = "input-field",
  type,
  label,
  placeholder,
  value,
  onChange ,
  isRequired = false,
  variant = "default",
  size = "md",
  className,
  icon = "default",
}: FormInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const variantClass = colorCombination[variant] || colorCombination.default;
  const sizeClass = InputSize[size] || InputSize.md;
  const iconClass = Icon[icon] || null;

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (value) {
      setIsFocused(false);
    } else if (!value && !isFocused) {
      setIsFocused(true);
    }
  };

  const isFloating = isFocused || Boolean(value);

  return (
    <div className="relative flex flex-col">
      <div className="relative">
        {iconClass && (
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">{iconClass}</span>
        )}
        {label && (
          <label
            htmlFor={name}
            className={`absolute left-12 transition-all duration-200 ease-in-out ${
              isFloating ? "top-1 text-xs text-gray-500" : "top-1/2 -translate-y-1/2  text-gray-500"
            }`}
          >
            {label}
            {isRequired && <span className="text-red-600">*</span>}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`${iconClass ? "pl-12" : ""} ${variantClass} ${sizeClass} ${className || ""}`}
        />
      </div>
    </div>
  );
}

export default FormInput;
