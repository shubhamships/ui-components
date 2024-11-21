interface labelProps {
  type: string;
  className?: string;
}
export const Label = ({ type, className }: labelProps) => {
  return <label className={`text-sm mb-2 ${className}`}>{type}</label>;
};
