// eslint-disable-next-line react/prop-types
//TODO: Can be grouped together with input so that we can provide id/htmlFor

function Label({ lableTitle }: { lableTitle: string }) {
  return (
    <div>
      <label htmlFor="" className="text-sm font-normal">
        {lableTitle}
      </label>
    </div>
  );
}

export default Label;
