interface ISelectProps {
  title: string;
  id: string;
  variant?: keyof typeof selectColors;
  size?: keyof typeof selectSize;
  className?: string;
  options: { value: string; label: string }[];
  value: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

const selectColors = {
  default: "border-gray-300 focus:border-blue-500",
  error: "border-red-500 focus:border-red-600",
};

const selectSize = {
  default: "h-10 text-base w-full",
  sm: "h-8 text-sm",
  lg: "h-12 text-lg",
};
function Select({ title, id, variant, size, className, options, value, required, onChange }: ISelectProps) {

  const baseClasses = "bg-white border rounded-md text-md";
  const variantClasses = selectColors[variant || 'default'];
  const sizeClasses = selectSize[size || 'default'];

  return (
    <div>
      <select
        name={title}
        id={id}
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className || ""}`}
        onChange={onChange}
        value={value}
        required={required}
      >
        <option value="" className="text-sm">
          {title}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
