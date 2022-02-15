import React, { FC } from "react";

import "./style.css";
import ComponentProps from "./types";

const ShownItems: FC<ComponentProps> = () => {
  return (
    <div className="actions-container">
      <div>5 items left</div>
      <div className="categories">
        <span className="active">All</span>
        <span>Active</span>
        <span>Completed</span>
      </div>
      <div className="completed">Clear Completed</div>
    </div>
  );
};

export default ShownItems;
