import React, { FC } from "react";

import "./style.css";

import ComponentProps from "./types";

const TodoItem: FC<ComponentProps> = ({ data }) => {
  return (
    <>
      <div className="round">
        <span className="remove"></span>
        <input type="checkbox" id={data} name={data} />
        <label htmlFor={data}>{data}</label>
      </div>
    </>
  );
};

export default TodoItem;
