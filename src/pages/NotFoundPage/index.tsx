import { FC } from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";
import { Routes } from "constants/routes";

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  const onClick = (): void => {
    navigate(Routes.Home);
  };

  return (
    <div data-testid="error-link">
      <h2 className="error">404 not found</h2>
      <button className="home" onClick={onClick}>
        Turn back to the Home page
      </button>
    </div>
  );
};

export default NotFoundPage;
