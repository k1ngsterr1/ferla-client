import { ROUTE_CONSTANTS } from "@shared/lib/routes/routes";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated"); // Example authentication check

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to={ROUTE_CONSTANTS.LOGIN} replace />
  );
};

export default ProtectedRoute;
