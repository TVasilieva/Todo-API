import React, { FC, useState } from "react";
import InputForAdding from "../../components/InputForAdding";
import ListOfTodos from "../../components/ListOfTodos";
import ShownItems from "../../components/ShownItems";

import { Todos, todos } from "../../todos";
import ComponentProps from "./types";
import "./style.css";

const AppPage: FC<ComponentProps> = () => {
  const [completed, setCompleted] = useState<boolean>(false);
  const [shownTodos, setShownTodos] = useState<Todos[]>([]);

  const showAll = (): void => {
    setShownTodos(todos);
  };

  const showActive = (): void => {
    setShownTodos(
      todos.filter((el) => {
        return el.status === "active";
      })
    );
  };

  const showCompleted = (): void => {
    setShownTodos(
      todos.filter((el) => {
        return el.status === "completed";
      })
    );
  };

  return (
    <div className="user-page">
      <h1>todo</h1>
      <InputForAdding />
      <ListOfTodos todos={shownTodos} />
      <ShownItems
        todos={shownTodos}
        showAll={showAll}
        showActive={showActive}
        showCompleted={showCompleted}
      />
    </div>
  );
};

export default AppPage;
