
// eslint-disable-next-line react/prop-types
function Label({ lableTitle }) {
  return (
    <div>
      <label htmlFor="" className="text-sm font-normal">
        {lableTitle} 
      </label>
    </div>
  );
}

export default Label;
