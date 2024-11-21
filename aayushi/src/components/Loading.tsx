/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

export const Loading = (Component) => {
    return ({ isLoading, children, ...props }) => (
      <Component {...props}>
        <div className="flex items-center justify-center">
          <div>{children}</div>
          {isLoading && (
            <i className="fa-duotone fa-solid fa-loader animate-spin ml-2"/>
          )}
        </div>
      </Component>
    );
  };