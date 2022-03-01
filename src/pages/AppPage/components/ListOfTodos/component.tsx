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
    <>
      {!!todos && todos.length ? (
        <div className="listOfTodos">
          {!!isLoading && <Loader />}
          {todoItems}
        </div>
      ) : (
        <div className="listOfEmptyTodos">Your list of todos is empty</div>
      )}
    </>
  );
};

export default ComponentListOfTodos;
