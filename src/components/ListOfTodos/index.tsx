import React, { FC } from "react";
import "./style.css";
import { todos } from "../../todos";
import TodoItem from "../TodoItem";

import ComponentProps from "./types";

const ListOfTodos: FC<ComponentProps> = () => {
  const todoItems = todos.map((el: any) => {
    return <TodoItem key={el.id} data={el.name} />;
  });

  return (
    <>
      <div className="listOfTodos">{todoItems}</div>
    </>
  );
};

export default ListOfTodos;
