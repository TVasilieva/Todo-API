import React, { FC } from "react";
import "./style.css";
import Props from "./types";

import ComponentTodoItem from "./component";

const TodoItem: FC<Props> = ({ todo, setShownTodos, handleRemoveTodo }) => {
  return (
    <ComponentTodoItem
      todo={todo}
      setShownTodos={setShownTodos}
      handleRemoveTodo={handleRemoveTodo}
    />
  );
};

export default TodoItem;
