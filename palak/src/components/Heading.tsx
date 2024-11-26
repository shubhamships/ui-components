interface HeadingProps {
  className: string;
  children: React.ReactNode;
}

function Heading({ children, className }: HeadingProps) {
  return <p className={`text-center ${className} font-semibold text-lg`}>{children}</p>;
}

export default Heading;
