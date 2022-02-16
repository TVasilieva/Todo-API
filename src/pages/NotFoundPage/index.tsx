import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import ComponentProps from "./types";
import "./style.css";

const NotFoundPage: FC<ComponentProps> = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="error">404 not found</h2>
      <button
        className="home"
        onClick={() => {
          navigate("/");
        }}
      >
        Go back to the Home page
      </button>
    </>
  );
};

export default NotFoundPage;
