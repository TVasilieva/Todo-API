import React, { FC } from "react";
import "./style.css";
import ComponentProps from "./types";

const ComponentListOfTodos: FC<ComponentProps> = ({ todos, todoItems }) => {
  return (
    <>
      {!!todos && todos.length ? (
        <div className="listOfTodos">{todoItems}</div>
      ) : (
        <div className="listOfEmptyTodos">Your list of todos is empty</div>
      )}
    </>
  );
};

export default ComponentListOfTodos;
