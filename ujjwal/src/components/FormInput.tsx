import { Mail, CircleUserRound, MapPin, Plus, Search } from "lucide-react";
import { useState } from "react";

/**
 * `FormInput` is a customizable input field component that allows various configurations for label, placeholder, size, color, and icons.
 * It supports floating labels, custom icons, and flexible styling.
 *
 * @param {string} name - The name of the input field, used for form submission and identifying the field. Default is "input-field".
 * @param {string} type - The type of the input field (e.g., text, email, password). This is a required field.
 * @param {string} [label] - The label to display above the input field. It’s optional and will float when the input is focused or filled.
 * @param {string} [placeholder] - The placeholder text inside the input field when it is empty.
 * @param {boolean} [isRequired=false] - If `true`, adds a red asterisk next to the label indicating the input field is required.
 * @param {React.ReactNode} [children] - Any child components or elements to be rendered within the input field. This is not used in the current implementation.
 * @param {string} [className] - Optional additional CSS classes to customize the input's appearance.
 * @param {keyof typeof colorCombination} [variant="default"] - Determines the color scheme of the input field.
 *  Available options: "default", "blue", "green", "yellow", "red".
 * @param {keyof typeof InputSize} [size="md"] - Determines the size of the input field.
 *  Available options: "sm", "md", "lg", "xl".
 * @param {keyof typeof Icon} [icon="default"] - Specifies which icon should be shown inside the input field.
 *  Available options: "default", "search", "mail", "location", "number", "person".
 * @param {boolean} [isFloatingLabel=false] - If `true`, the label will float above the input field when the field is focused or filled.
 *
 * @returns {JSX.Element} A customizable input field with floating labels, optional icons, and dynamic appearance based on the provided props.
 */

interface FormInputProps {
  name?: string;
  type: string;
  label?: string;
  placeholder?: string;
  value?: any;
  onChange?: (e: any) => void;
  isRequired?: boolean;
  children?: any;
  className?: string;
  variant?: keyof typeof colorCombination;
  size?: keyof typeof InputSize;
  icon?: keyof typeof Icon;
  isFloatingLabel?: boolean;
}

const colorCombination = {
  default: "text-white bg-gray-600 p-2 focus:ring-2 focus:ring-teal-400 appearance-none",
  focusBlue: "text-white bg-gray-600 p-2 focus:ring-2 focus:ring-sky-400 appearance-none",
  focusGreen: "text-white bg-gray-600 p-2 focus:ring-2 focus:ring-lime-400 appearance-none",
  focusYellow: "text-white bg-gray-600 p-2 focus:ring-2 focus:ring-yellow-300 appearance-none",
  focusRed: "text-white bg-gray-600 p-2 focus:ring-2 focus:ring-pink-500 appearance-none",
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
  isRequired = false,
  variant = "default",
  size = "md",
  className,
  icon = "default",
}: FormInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [data, setData] = useState("");
  const variantClass = colorCombination[variant] || colorCombination.default;
  const sizeClass = InputSize[size] || InputSize.md;
  const iconClass = Icon[icon] || null;
  const isFloating = isFocused;

  const handleInputEvent = (e: any) => {
    const { type, target } = e;
    const inputValue = target.value.trim();

    type === "focus"
      ? setIsFocused(true)
      : type === "blur"
        ? setIsFocused(false)
        : type === "change" && (setData(e.target.value), setIsFocused(inputValue !== ""));
  };

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
              isFloating ? "top-1 text-xs text-white" : "top-1/2 -translate-y-1/2  text-white"
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
          value={data}
          onChange={handleInputEvent}
          onFocus={handleInputEvent}
          onBlur={handleInputEvent}
          className={`${iconClass ? "pl-12" : ""} ${variantClass} ${sizeClass} ${className || ""}`}
        />
      </div>
    </div>
  );
}
export default FormInput;
