/* eslint-disable react/prop-types */

export const Label = ({ type, className }) => {
  return (
    <div className="mb-2">
      <label className={`text-sm mb-2 ${className}`}>{type} </label>
    </div>
  );
};
