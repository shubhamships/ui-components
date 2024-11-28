function Errors({name, className, errorDescription}: {name?: boolean, className?: string, errorDescription?: string}) {
  return (
    <div className={className}>
      {name && <span className="text-sm font-medium text-red-600">{errorDescription}</span>}
    </div>
  );
}

export default Errors;
