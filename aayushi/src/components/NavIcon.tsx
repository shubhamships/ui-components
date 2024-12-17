import { Link } from "react-router-dom";
interface NavIconProps{
    icon:any;
    className?:string;
}

export const NavIcon = ({ icon,className}:NavIconProps) => {
  return (
    <Link to="#" className={`transform transition-all duration-500 ease  group-hover:scale-105 ${className}`}>
      {icon}
    </Link>
  );
};