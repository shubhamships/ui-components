import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { Hash } from "lucide-react";
import { Search } from "lucide-react";

interface FormInputProps {
  name?: string;
  type: string;
  label?: string;
  placeholder?: string;
  value: any;
  onChange?: () => void;
  isRequired?: boolean;
  children: any;
  className?: string;
  variant?: keyof typeof colorCombination;
  size?: keyof typeof InputSize;
  icon?: keyof typeof Icon;
}

const colorCombination = {
  default: "text-gray-800 bg-gray-100 p-2 hover:bg-gray-200 focus:ring-1 focus:ring-green-400",
  blue: "text-black p-2 focus:ring-1 focus:ring-blue-400",
  green: "text-black p-2 focus:ring-1 focus:ring-green-400",
  yellow: "text-black p-2 focus:ring-1 focus:ring-yellow-400",
  red: "text-black p-2 hover:bg-red-200 focus:ring-1 focus:ring-red-400",
};

const InputSize = {
  sm: "text-sm px-2 py-1 border border-yellow-300 rounded-xs",
  md: "text-md px-3 py-2 border border border-blue-300 rounded-md",
  lg: "text-lg px-4 py-3 border border-green-300 rounded-lg",
  xl: "text-xl px-5 py-4  border border-red-300 rounded-2xl",
};

const Icon = {
  default: null,
  search: <Search />,
  mail: <Mail />,
  location: <MapPin />,
  number: <Hash />,
};

function FormInput({
  name = "input-field",
  type,
  label,
  placeholder = "Enter text....",
  value,
  onChange,
  isRequired = false,
  variant = "default",
  size = "md",
  className,
  icon = "default",
}: FormInputProps) {
  const variantClass = colorCombination[variant] || colorCombination.default;
  const sizeClass = InputSize[size] || InputSize.md;
  const iconClass = Icon[icon] || null;

  return (
    <div className="flex flex-col">
      <label>
        {label} {isRequired && <span className="text-red-600">*</span>}
      </label>
      <div className="relative">
        {iconClass && (
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black">{iconClass}</span>
        )}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${iconClass ? "pl-10" : ""} ${variantClass} ${sizeClass} ${className} || ""`}
        />
      </div>
    </div>
  );
}

export default FormInput;
