import React from "react";
import { ImSpinner3 } from "react-icons/im";

const withLoading = (WrappedComponent: any) => {
  return ({ loading, children, ...props }) => (
    <button
      className={`bg-blue-900 w-full h-11 mt-10 text-white text-sm font-medium rounded-lg max-w-sm ${
        loading ? "opacity-40" : ""
      } `}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center gap-2">
          Submit <ImSpinner3 className="animate-spin" />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default withLoading;
