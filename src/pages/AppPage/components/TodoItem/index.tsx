import { FC } from "react";
import classNames from "classnames";

import "./style.scss";
import Props from "./types";

import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const TodoItem: FC<Props> = ({ todo, handleRemoveTodo, handleCompleted }) => {
  const style = classNames("round", todo.completed && "complited");

  return (
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
        onClick={handleRemoveTodo(todo)}
      >
        <DeleteOutlineIcon />
      </IconButton>
    </div>
  );
};

export default TodoItem;
