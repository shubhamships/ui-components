interface HeadingProps {
  className: string;
  children: React.ReactNode;
}

function Heading({ children, className }: HeadingProps) {
  return <p className={`mx-auto ${className} font-semibold text-lg`}>{children}</p>;
}

export default Heading;
