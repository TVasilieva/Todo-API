import React, { FC } from "react";
import "./style.scss";
import ComponentProps from "./types";

const Layout: FC<ComponentProps> = (props) => {
  const snowflakes = Array.from(Array(200)).map((_, index) => (
    <div key={index} className="snow"></div>
  ));

  return (
    <div className="bg-image">
      <div className="bg-gradient">
        {snowflakes}
        <div className="container">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
