import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import ComponentNotFoundPage from "./component";
import "./style.css";

const NotFoundPage: FC = () => {
  const navigate = useNavigate();
  const turnPage = (): void => {
    navigate("/");
  };

  return <ComponentNotFoundPage turnPage={turnPage} />;
};

export default NotFoundPage;
