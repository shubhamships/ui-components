/* eslint-disable react/prop-types */

interface LabelProps{
  type:string;
  className?:string;
}
export const Label: React.FC<LabelProps> = ({ type, className }) => {
    return (
      <div className="mb-2">
        <label className={`text-sm mb-2 ${className}`}>{type} </label>
      </div>
    );
  };