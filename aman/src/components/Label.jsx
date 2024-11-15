import React from "react";

function Label({ lableTitle }) {
  return (
    <div>
      <label htmlFor="" className="text-sm font-normal">
        {lableTitle} <span className="text-red-600 ml-1">*</span>
      </label>
    </div>
  );
}

export default Label;
