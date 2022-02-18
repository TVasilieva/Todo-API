import React, { FC } from "react";
import "./style.css";
import ComponentProps from "./types";

const ComponentNotFoundPage: FC<ComponentProps> = ({ turnPage }) => {
  return (
    <>
      <h2 className="error">404 not found</h2>
      <button className="home" onClick={turnPage}>
        Turn back to the Home page
      </button>
    </>
  );
};

export default ComponentNotFoundPage;
