import React, { FC } from "react";

import "./style.css";
import ComponentProps from "./types";

const ShownItems: FC<ComponentProps> = ({
  todos,
  showAll,
  showActive,
  showCompleted,
}) => {
  const itemsLeft = todos.filter((el) => el.active).length;

  return (
    <div className="actions-container">
      <div className="left-side">
        <div>{itemsLeft} items left</div>
        <div className="clear-completed" onClick={showAll}>
          Clear Completed
        </div>
      </div>
      <div className="categories">
        <div>
          <span className="active-choice" onClick={showAll}>
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
