import React, { FC } from "react";

import "./style.css";
import ComponentProps from "./types";

import IconButton from "@mui/material/IconButton";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const TodoItem: FC<ComponentProps> = ({ todo, setShownTodos }) => {
  let classNames = "round " + (todo.active ? "active" : "completed");

  return (
    <>
      <div className={classNames}>
        <input
          type="checkbox"
          id={todo.name}
          name={todo.name}
          value={todo.name}
          checked={!todo.active}
          onChange={setShownTodos(todo.id)}
        />
        <label htmlFor={todo.name}>{todo.name}</label>
        <IconButton aria-label="delete" size="large">
          <DeleteOutlineIcon />
        </IconButton>
      </div>
    </>
  );
};

export default TodoItem;
