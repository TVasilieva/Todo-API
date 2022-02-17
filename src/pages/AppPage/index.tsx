import React, { FC, useEffect, useState } from "react";
import InputForAdding from "../../components/InputForAdding";
import ListOfTodos from "../../components/ListOfTodos";
import ShownItems from "./components/ShownItems";

import { Todos, todos } from "../../todos";
import ComponentProps, { Filter } from "./types";
import "./style.css";

const AppPage: FC<ComponentProps> = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const [shownTodos, setShownTodos] = useState<Todos[]>([]);
  // @mock
  const [staticTodos, setStaticTodos] = useState<Todos[]>(todos);

  useEffect(() => {
    if (filter === "active") {
      return setShownTodos(staticTodos.filter((todo) => todo.active));
    }

    if (filter === "completed") {
      return setShownTodos(staticTodos.filter((todo) => !todo.active));
    }

    if (filter === "clear") {
      setFilter("all");
      for (let i in staticTodos) {
        staticTodos[i].active = true;
      }
      return setShownTodos(staticTodos);
    }

    return setShownTodos(staticTodos);
  }, [filter, staticTodos]);

  const handleChangeFilter = (filter: Filter) => (): void => {
    setFilter(filter);
  };

  const handleComplete = (id: number) => (): void => {
    const newTodos = staticTodos.map((todo) =>
      todo.id === id ? { ...todo, active: !todo.active } : todo
    );
    setStaticTodos(newTodos);
  };

  const activeTodoLength = shownTodos.filter((todo) => todo.active).length;

  return (
    <div className="user-page">
      <h1>todo</h1>
      <InputForAdding />
      <ListOfTodos todos={shownTodos} setShownTodos={handleComplete} />
      <ShownItems
        filter={filter}
        activeTodoLength={activeTodoLength}
        onChangeFilter={handleChangeFilter}
      />
    </div>
  );
};

export default AppPage;
