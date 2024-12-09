interface ButtonProps {
  label: string;
  bgColor: string;
  textColor: string;
  hoverColor: string;
  transitions: string;
  animations?:string; 
}

export const Button = ({
  label,
  bgColor,
  textColor,
  hoverColor,
  transitions,
  animations,
}: ButtonProps) => {
  return (
    <button
    className={`relative cursor-pointer overflow-hidden  ${textColor} ${bgColor} font-mono  group ${transitions}`}
  >
    <span
      className={`group absolute ${animations}`}
    ></span>
    <span className={`relative transition duration-300 group-hover:text-${hoverColor}`}>
      {label}
    </span>
  </button>
  );
};
