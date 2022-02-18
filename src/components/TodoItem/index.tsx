import React, { FC } from "react";
import classNames from "classnames";
import "./style.css";
import ComponentProps, { DispatchProps } from "./types";

import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { removeTodo } from "../../state/todos/actions";

const TodoItem: FC<ComponentProps> = ({ todo, setShownTodos, removeTodo }) => {
  const style = classNames("round", !todo.active && "complited");

  const handleRemoveTodo = (id: number) => (): void => {
    removeTodo(id);
  };

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
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  removeTodo: (id: number) => {
    dispatch(removeTodo(id));
  },
});

export default connect<any, DispatchProps>(
  undefined,
  mapDispatchToProps
)(TodoItem);
