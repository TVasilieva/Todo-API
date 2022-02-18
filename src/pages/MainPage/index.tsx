import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import ComponentProps from "./types";
import "./style.css";

const MainPage: FC<ComponentProps> = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="greeting">todo app</h2>
      <button
        className="login-btn"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
    </>
  );
};

export default MainPage;
