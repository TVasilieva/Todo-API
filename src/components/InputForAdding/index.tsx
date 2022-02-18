import React, { FC, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import "./style.css";
import ComponentProps, { DispatchProps } from "./types";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { addTodo } from "../../state/todos/actions";
import { Todo } from "todos";

const InputForAdding: FC<ComponentProps> = ({ addTodo }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleAddTodo = (): void => {
    addTodo({
      id: Math.random(),
      name: value[0].toUpperCase() + value.slice(1),
      active: true,
    });
    setValue("");
  };

  const disabled = !value;

  return (
    <div>
      <input
        className="inputForAdding"
        placeholder="Currently typing..."
        value={value}
        onChange={handleChange}
      />
      <Fab
        className="addBtn"
        size="medium"
        color="secondary"
        aria-label="add"
        onClick={handleAddTodo}
        disabled={disabled}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addTodo: (todo: Todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect<any, DispatchProps>(
  undefined,
  mapDispatchToProps
)(InputForAdding);
