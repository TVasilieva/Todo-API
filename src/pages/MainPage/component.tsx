import React, { FC } from "react";
import ComponentProps from "./types";
import "./style.css";

const ComponentMainPage: FC<ComponentProps> = ({ account, openLoginModal }) => {
  return (
    <>
      <h2 className="greeting">todo app</h2>
      {!account && (
        <button className="login-btn" onClick={openLoginModal}>
          Login
        </button>
      )}
    </>
  );
};

export default ComponentMainPage;
