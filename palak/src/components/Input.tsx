interface InputProps {
  type: string;
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name: string;
}

export const Input = ({ type, placeholder, className, onChange, value, name }: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`mx-auto rounded-md h-10 w-80 focus-visible:outline-none focus-visible:ring-1 focus:ring-blue-400 p-2 border border-blue-300 text-sm $ backdrop-blur-md ${className}`}
    />
  );
};
