import React, { FC } from "react";
import "./style.css";
import TodoItem from "../TodoItem";

import ComponentProps from "./types";

const ListOfTodos: FC<ComponentProps> = ({ todos, setShownTodos }) => {
  const todoItems = todos.map((el: any) => {
    return (
      <TodoItem
        key={el.id}
        todo={el}
        todos={todos}
        setShownTodos={setShownTodos}
      />
    );
  });

  return (
    <>
      {todos.length ? (
        <div className="listOfTodos">{todoItems}</div>
      ) : (
        <div className="listOfEmptyTodos">Your list of todos is empty</div>
      )}
    </>
  );
};

export default ListOfTodos;
