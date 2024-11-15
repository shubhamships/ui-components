function Errors(props) {
  // eslint-disable-next-line react/prop-types
  const { name, className } = props;
  return (
    <div className={className}>
      {name && <span className="text-xs font-medium text-red-600">{name}</span>}
    </div>
  );
}

export default Errors;
