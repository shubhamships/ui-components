interface LabelProps {
  type: string;
  className?: string;
}

export const Label = ({ type, className }: LabelProps) => {
  return <label className={`text-md py-2 px-4 rounded-3xl ${className}`}>{type}</label>;
};
