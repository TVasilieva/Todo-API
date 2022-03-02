import { FC } from "react";
import ComponentProps from "./types";
import { Navigate } from "react-router-dom";

import { getToken } from "utils/token";
import NotFoundPage from "pages/NotFoundPage";
import { Routes } from "constants/routes";

export const ProtectedRoute: FC<ComponentProps> = ({ children }) => {
  const token = getToken();

  if (token) {
    return children ? children : <NotFoundPage />;
  }

  return <Navigate to={Routes.Home} />;
};

export default ProtectedRoute;
