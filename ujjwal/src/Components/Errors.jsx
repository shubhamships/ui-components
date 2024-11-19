function Error({ errors, className }) {
  return (
    <div>
      <div>{errors && <p className={`text-xs font-medium text-red-600 ${className}`}>{errors}</p>}</div>
    </div>
  );
}
export default Error;
