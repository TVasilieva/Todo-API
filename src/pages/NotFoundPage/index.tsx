import { FC } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { Routes } from "constants/routes";

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  const onClick = (): void => {
    navigate(Routes.Home);
  };

  return (
    <>
      <h2 className="error">404 not found</h2>
      <button className="home" onClick={onClick}>
        Turn back to the Home page
      </button>
    </>
  );
};

export default NotFoundPage;
