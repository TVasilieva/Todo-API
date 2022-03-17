import { FC } from "react";
import classNames from "classnames";

import "./style.scss";
import Props from "./types";

import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { useAppDispatch } from "state";
import { updateTodoRequest } from "state/todos/actions";

const TodoItem: FC<Props> = ({ todo, handleRemoveTodo }) => {
  const dispatch = useAppDispatch();

  const handleCompleted = (id: string, completed: boolean) => (): void => {
    dispatch(
      updateTodoRequest({
        id,
        completed: {
          completed: !completed,
        },
      })
    );
  };

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
      <IconButton aria-label="delete" onClick={handleRemoveTodo(todo.id)}>
        <DeleteOutlineIcon />
      </IconButton>
    </div>
  );
};

export default TodoItem;
