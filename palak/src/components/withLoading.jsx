import { ImSpinner3 } from "react-icons/im";

function withLoading(WrappedComponent) {
  return ({ isLoading, children, ...props }) => (
    <WrappedComponent {...props}>
      {isLoading ? (
        <div className={`flex justify-center items-center gap-1 `}>
          {children}
          <ImSpinner3 className="animate-spin" />
        </div>
      ) : (
        children
      )}
    </WrappedComponent>
  );
}

export default withLoading;
