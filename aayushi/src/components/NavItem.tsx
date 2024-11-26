export const NavItem = ({ href="", children="", className = "" }) => {
  return (
    <li>
      <a
        href={href}
        className={`hover:border-b-2 hover:border-yellow-400 hover:transition-all hover:ease-in-out ${className}`}
      >
        {children}
      </a>
    </li>
  );
};
