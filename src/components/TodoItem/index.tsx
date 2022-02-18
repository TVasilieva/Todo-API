import React, { FC } from "react";
import classNames from "classnames";
import "./style.css";
import ComponentProps from "./types";

import IconButton from "@mui/material/IconButton";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const TodoItem: FC<ComponentProps> = ({ todo, setShownTodos }) => {
  const style = classNames("round", !todo.active && "complited");

  return (
    <>
      <div className={style}>
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
