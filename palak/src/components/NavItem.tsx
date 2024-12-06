import { Link } from "react-router-dom";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavItem = ({ href, children, className }: NavItemProps) => {
  return (
    <li>
      <Link to={href} className={`text-black text-opacity-70 hover:text-opacity-30 ${className}`}>
        {children}
      </Link>
    </li>
  );
};
