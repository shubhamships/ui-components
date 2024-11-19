import { useEffect } from "react";

export const withLogger = (WrappedComponent) => {
  const WithLogger = (props) => {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} mounted`);
      return () => {
        console.log(`Component ${WrappedComponent.name} unmounted`);
      };
    }, []);
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} updated`);
    });
    return <WrappedComponent {...props} />;
  };

  WithLogger.displayName = `WithLogger(${WrappedComponent.displayName || WrappedComponent.name})`
  return WithLogger;
};
