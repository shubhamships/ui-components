import { ChevronRight } from "lucide-react";

interface Option {
  value: string;
  label: string;
}
interface Props {
  options: Option[];
  placeholder: string;
}

function Select(props: Props) {
  const { options, placeholder } = props;
  return (
    <div className="relative">
      <label htmlFor="" className="text-sm font-normal">
        Country
      </label>
      <select className="border mt-1 rounded-md w-full p-4 focus:outline appearance-none" defaultValue="Choose One">
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute bottom-2.5 right-2 text-xs flex pointer-events-none">
        <ChevronRight className="rotate-90 mb-2 text-gray-600" />
      </div>
    </div>
  );
}

export default Select;
