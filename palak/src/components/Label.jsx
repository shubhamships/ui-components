export const Label = ({ type, className }) => {
  return (
    <div className="mb-2">
      <label className={`text-sm ${className}`}>{type}</label>
      <span className="ml-1 text-red-500">*</span>
    </div>
  );
};
