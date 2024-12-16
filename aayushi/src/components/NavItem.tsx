import { Link } from "react-router-dom";

interface NavProps {
  text: string;
  className?:string;
}

export const NavItem = ({ text,className }: NavProps) => {
  return (
    <div className={`${className}`}>
      <Link to="#">
        {text}
      </Link>
    </div>
  );
};