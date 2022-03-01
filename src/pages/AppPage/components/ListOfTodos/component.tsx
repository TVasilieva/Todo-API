import React, { FC } from "react";
import "./style.css";
import ComponentProps from "./types";

import Loader from "components/Loader";

const ComponentListOfTodos: FC<ComponentProps> = ({
  todos,
  todoItems,
  isLoading,
}) => {
  return (
    <div className="listOfTodos_container">
      {isLoading && <Loader />}
      {!!todos && todos.length ? (
        <div className="listOfTodos">{todoItems}</div>
      ) : (
        <div className="listOfEmptyTodos">Your list of todos is empty</div>
      )}
    </div>
  );
};

export default ComponentListOfTodos;
