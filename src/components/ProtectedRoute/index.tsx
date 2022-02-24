import { Routes } from "constants/routes";
import ComponentProps from "./types";
import { Navigate } from "react-router-dom";
import { getToken } from "utils/token";

export const ProtectedRoute: React.FC<ComponentProps> = ({
  component: Component,
}) => {
  const token = getToken();
  // if (token && window.location.pathname === Routes.Home) {
  //   return <Navigate to={Routes.Todo} />;
  // }
  if (token && window.location.pathname === Routes.Home) {
    return <Component />;
  }

  return <Navigate to={Routes.Home} />;
};

export default ProtectedRoute;
