import { Link } from "react-router-dom";
interface NavIconProps{
    icon:any;
    className?:string;
}

export const NavIcon = ({ icon,className}:NavIconProps) => {
  return (
    <Link to="#" className={`${className}`}>
      {icon}
    </Link>
  );
};