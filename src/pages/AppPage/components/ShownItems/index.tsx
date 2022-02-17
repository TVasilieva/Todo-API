import React, { FC } from "react";

import "./style.css";
import ComponentProps from "./types";
import { Filter } from "../../types";

const ShownItems: FC<ComponentProps> = ({
  filter,
  activeTodoLength,
  onChangeFilter,
}) => {
  const isActive = (word: Filter) => {
    return filter === word ? "active-choice" : "categories";
  };

  return (
    <div className="actions-container">
      <div className="left-side">
        <div>{activeTodoLength} items left</div>
        <div className="clear-completed" onClick={onChangeFilter("clear")}>
          Clear Completed
        </div>
      </div>
      <div className="categories">
        <div>
          <span className={isActive("all")} onClick={onChangeFilter("all")}>
            All
          </span>
        </div>
        <div>
          <span
            className={isActive("active")}
            onClick={onChangeFilter("active")}
          >
            Active
          </span>
        </div>
        <div>
          <span
            className={isActive("completed")}
            onClick={onChangeFilter("completed")}
          >
            Completed
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShownItems;
