// import React, { Children } from "react";

// const withLoading = (WrappedComponent) => {
//   return ({ ...props }) => {
//     return <WrappedComponent {...props}></WrappedComponent>;
//   };
// };
import { ImSpinner3 } from "react-icons/im";

function withLoading(WrappedComponent) {
  return ({ isLoading, children, ...props }) => (
    <WrappedComponent {...props}>
      <div>
        <div>
          {isLoading ? (
            <div className="flex justify-center items-center gap-1">
              Submit
              <ImSpinner3 className="animate-spin" />
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </WrappedComponent>
  );
}

export default withLoading;
