// export const NavItem = ({ href="", children="", className = "" }) => {
//   return (
//     <li>
//       <a
//         href={href}
//         className={`hover:border-b-2 hover:border-yellow-400 hover:transition-all hover:ease-in-out ${className}`}
//       >
//         {children}
//       </a>
//     </li>
//   );
// };

import { Link } from "react-router-dom";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavItem= ({ href, children, className }:NavItemProps) => {
  return (
    <li>
      <Link
        to={href}
        className={`hover:border-b-2 hover:border-yellow-400 hover:transition-all hover:ease-in-out ${className}`}
      >
        {children}
      </Link>
    </li>
  );
};
