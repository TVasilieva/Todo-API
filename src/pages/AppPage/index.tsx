import React, { FC, useEffect, useState } from "react";
import ComponentAppPage from "./component";
import "./style.css";

import { useAppDispatch, useAppSelector } from "state";
import { filterTodos, setTodos } from "state/todos/actions";
import { getTodos } from "state/todos/selectors";
import { getUser } from "state/user/selectors";
import { Todo } from "models/todo";

import { Logout } from "state/user/actions";
import { useNavigate } from "react-router-dom";
import { Filter } from "./types";

const AppPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const todos = useAppSelector(getTodos);
  const account = useAppSelector(getUser);

  const [filter, setFilter] = useState<Filter>("all");
  const [shownTodos, setShownTodos] = useState<Todo[]>([]);
  //@mock
  // const [staticTodos, setstaticTodos] = useState<Todo[]>(todos);

  useEffect(() => {
    const todosLS = localStorage.getItem("todos") || "[]";
    if (account) {
      const todosToDisplay = JSON.parse(todosLS).filter(
        (todo: Todo) => todo.id === account.id
      );
      dispatch(setTodos(todosToDisplay[0].listOfTodos));
    }
  }, []);

  useEffect(() => {
    // if (filter === "active") {
    //   return setShownTodos(todos.filter((todo) => todo.active));
    // }

    // if (filter === "completed") {
    //   return setShownTodos(todos.filter((todo) => !todo.active));
    // }

    // if (filter === "clear") {
    //   setFilter("all");
    //   for (let i in todos) {
    //     todos[i].active = true;
    //   }
    //   return setShownTodos(todos);
    // }

    // return setShownTodos(todos);
    dispatch(filterTodos(filter));
  }, [filter]);

  const handleLogout = (): void => {
    dispatch(Logout());
    navigate("/");
  };

  const handleChangeFilter = (filter: Filter) => (): void => {
    setFilter(filter);
    dispatch(filterTodos(filter));
  };

  const handleComplete = (id: number) => (): void => {
    const newTodos = todos?.map((todo) =>
      todo.id === id ? { ...todo, active: !todo.active } : todo
    );
    setShownTodos(newTodos);
  };

  const activeTodoLength = shownTodos.filter((todo) => todo.active).length;

  return (
    <ComponentAppPage
      account={account}
      filter={filter}
      activeTodoLength={activeTodoLength}
      handleComplete={handleComplete}
      handleChangeFilter={handleChangeFilter}
      handleLogout={handleLogout}
    />
  );
};

export default AppPage;
