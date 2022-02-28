import React, { FC } from "react";
import classNames from "classnames";
import "./style.css";
import ComponentProps from "./types";

import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const ComponentTodoItem: FC<ComponentProps> = ({
  todo,
  handleRemoveTodo,
  handleCompleted,
}) => {
  const style = classNames("round", !todo.completed && "complited");
  return (
    <>
      <div className={style}>
        <input
          type="checkbox"
          id={todo.name}
          name={todo.name}
          value={todo.name}
          checked={todo.completed}
          onChange={handleCompleted(todo.id, todo.completed)}
        />
        <label htmlFor={todo.name}>{todo.name}</label>
        <IconButton
          aria-label="delete"
          size="large"
          onClick={handleRemoveTodo(todo.id)}
        >
          <DeleteOutlineIcon />
        </IconButton>
      </div>
    </>
  );
};

export default ComponentTodoItem;
