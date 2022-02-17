import React, { FC, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import "./style.css";
import ComponentProps, { DispatchProps, StateProps } from "./types";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { addTodos } from "../../state/todos/actions";
import { Todo } from "todos";

const InputForAdding: FC<ComponentProps> = ({ addTodos }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleAddTodo = (): void => {
    addTodos({
      id: Math.random(),
      name: value,
      active: true,
    });
    setValue("");
  };

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
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

const mapStateToProps = (state: any): StateProps => ({
  todos: state.todos.todos,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addTodos: (todo: Todo) => {
    dispatch(addTodos(todo));
  },
});

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(InputForAdding);
