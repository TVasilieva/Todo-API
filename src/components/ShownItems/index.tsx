import React, { FC } from "react";

import "./style.css";
import ComponentProps from "./types";

const ShownItems: FC<ComponentProps> = ({
  filter,
  activeTodoLength,
  onChangeFilter,
}) => {
  console.log(filter);
  return (
    <div className="actions-container">
      <div className="left-side">
        <div>{activeTodoLength} items left</div>
        <div className="clear-completed" onClick={onChangeFilter("all")}>
          Clear Completed
        </div>
      </div>
      <div className="categories">
        <div>
          <span className="active-choice" onClick={onChangeFilter("all")}>
            All
          </span>
        </div>
        <div>
          <span onClick={onChangeFilter("active")}>Active</span>
        </div>
        <div>
          <span onClick={onChangeFilter("completed")}>Completed</span>
        </div>
      </div>
    </div>
  );
};

export default ShownItems;
