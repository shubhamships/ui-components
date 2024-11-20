/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import { ImSpinner3 } from "react-icons/im";

interface withLoadingProps {
  loading: boolean;
  children: string;
}

const withLoading = () => {
  return ({ loading, children, ...props }: withLoadingProps) => (
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
