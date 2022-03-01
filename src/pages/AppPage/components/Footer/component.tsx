import React, { FC } from "react";

import "./style.css";
import ComponentProps from "./types";

const ComponentFooter: FC<ComponentProps> = ({
  isActive,
  activeTodoLength,
  onChangeFilter,
  handleLogout,
}) => {
  return (
    <>
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
      <button className="logoutBtn" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default ComponentFooter;