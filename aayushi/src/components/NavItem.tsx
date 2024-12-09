import { Link } from "react-router-dom";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavItem = ({ href, children, className }: NavItemProps) => {
  return (
    <li className="group flex items-center">
      <Link
        to={href}
        className={`flex items-center text-base text-white text-opacity-70 hover:text-opacity-70 ${className}`}
      >
        {children}
      </Link>
    </li>
  );
};
