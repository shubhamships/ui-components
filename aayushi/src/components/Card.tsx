import {Link} from 'react-router-dom';
interface CardProps {
  gradient: string; 
  borderColor: string; 
  icon?: JSX.Element; 
  text: string; 
  bg:string;
  number: string | number;
  className?: string; 
}

export const Card = ({ gradient, borderColor,bg, icon, text, number, className }:CardProps) => {
  return (
    <Link to="#"
      className={`p-6 rounded-lg border-2 ${borderColor} shadow-lg ${gradient} ${className}`}
    >
      <div className="flex flex-col items-center justify-center text-center leading-relaxed">
        <div className={`text-3xl p-1 ${bg} border rounded-md text-white`}>{icon}</div>
        <div className="">
          <div className="font-normal text-md">{text}</div>
          <div className="text-xl font-semibold">{number}</div>
          <button className="px-1 py-0.5 bg-gray-100 cursor-pointer border rounded-md">View</button>
        </div>
      </div>
    </Link>
  );
};
