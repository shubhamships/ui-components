export const Input = ({
  type,
  placeholder,
  className,
  onChange,
  value,
  name,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`border rounded-md w-full py-2 px-3 flex h-10 text-sm focus-visible:outline-none focus-visible:ring-1 focus:ring-blue-600 ${className}`}
    />
  );
};