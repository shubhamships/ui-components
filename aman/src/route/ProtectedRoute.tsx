import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("jwtToken"); 
  return token ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
