import { ImSpinner3 } from "react-icons/im";

interface LoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
  onClick: () => void;
  className: string;
}

function withLoading(WrappedComponent: any) {
  return ({ isLoading, children, ...props }: LoadingProps) => (
    <WrappedComponent {...props}>
      {isLoading ? (
        <div className={`flex justify-center items-center gap-1`}>
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
