import React, { FC, useEffect, useState } from "react";
import InputForAdding from "../../components/InputForAdding";
import ListOfTodos from "../../components/ListOfTodos";
import ShownItems from "../../components/ShownItems";

import { Todos, todos } from "../../todos";
import ComponentProps from "./types";
import "./style.css";

const AppPage: FC<ComponentProps> = () => {
  const [shownTodos, setShownTodos] = useState<Todos[]>([]);
  // @mock
  const [staticTodos, setStaticTodos] = useState<Todos[]>(todos);

  useEffect(() => {
    setShownTodos(staticTodos);
  }, [staticTodos]);

  // useEffect(() => {
  //   console.log(staticTodos);
  // }, [staticTodos]);

  const showAll = (): void => {
    setShownTodos(staticTodos);
  };

  const showActive = (): void => {
    const active = staticTodos.filter((el) => el.active === true);
    setShownTodos(active);
  };

  const showCompleted = (): void => {
    const completed = staticTodos.filter((el) => el.active === false);
    setShownTodos(completed);
  };

  const handleComplete = (id: number) => (): void => {
    const newTodos = staticTodos.map((todo) =>
      todo.id === id ? { ...todo, active: !todo.active } : todo
    );
    setStaticTodos(newTodos);
    console.log(id);
  };

  return (
    <div className="user-page">
      <h1>todo</h1>
      <InputForAdding />
      <ListOfTodos todos={shownTodos} setShownTodos={handleComplete} />
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
