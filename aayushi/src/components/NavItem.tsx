import { Link } from "react-router-dom";

interface NavProps {
  text: string;
  className?:string;
}

export const NavItem = ({ text,className }: NavProps) => {
  return (
    <div className={`transform duration-500 ease transition-all  group-hover:scale-105 ${className}`}>
      <Link to="#">
        {text}
      </Link>
    </div>
  );
};