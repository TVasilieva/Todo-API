import React, { FC } from "react";

import "./style.css";
import ComponentProps from "./types";

const ShownItems: FC<ComponentProps> = ({
  todos,
  showAll,
  showActive,
  showCompleted,
}) => {
  return (
    <div className="actions-container">
      <div className="left-side">
        <div>5 items left</div>
        <div className="completed">Clear Completed</div>
      </div>
      <div className="categories">
        <div>
          <span className="active" onClick={showAll}>
            All
          </span>
        </div>
        <div>
          <span onClick={showActive}>Active</span>
        </div>
        <div>
          <span onClick={showCompleted}>Completed</span>
        </div>
      </div>
    </div>
  );
};

export default ShownItems;
