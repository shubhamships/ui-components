import Errors from "./Errors";

/* eslint-disable react/prop-types */
function Input(props) {
  const {
    type,
    placeholder,
    id,
    variant = "default",
    size = "default",
    labelData,
    className,
    name,
    onChange,
    required,
    onClick,
    errorName,
  } = props;
  const inputColors = {
    default: "bg-black-300",
    error:
      "bg-red-100 border-0 ring-1 ring-inset ring-red-300 focus:ring-2 focus:ring-red-400",
  };
  const inputSize = {
    default: "h-10 text-base",
    sm: "h-16 text-sm",
    lg: "h-16 text-lg",
  };
  // const baseClasses = "inline-flex p-1 px-3 rounded-md text-md border-0 ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-600 focus:outline-none placeholder:text-sm placeholder:from-neutral-400"
  const baseClasses =
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50";
  const variantClasses = inputColors[variant] || inputColors.default;
  const sizeClasses = inputSize[size] || inputSize.default;
  return (
    <div>
      <div className="flex flex-col justify-start gap-2 appearance-none">
        <label htmlFor={id} className="text-sm font-normal leading-none">
          {labelData} {/* required && <span ...class>*</span>*/}{" "}
          <span className="text-red-primary">{required}</span>{" "}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          name={name}
          className={`${baseClasses} ${variantClasses} ${sizeClasses} ${
            className || ""
          }`}
          onChange={onChange}
          onClick={onClick}
        />
      </div>
      <Errors name={errorName} />
    </div>
  );
}

export default Input;