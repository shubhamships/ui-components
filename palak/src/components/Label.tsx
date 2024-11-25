interface LabelProps {
  type: string;
  className?: string;
}

export const Label = ({ type, className }: LabelProps) => {
  return <label className={`text-sm mb-2 ${className}`}>{type}</label>;
};
