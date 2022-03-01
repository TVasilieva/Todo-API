import React, { FC, useEffect, useState } from "react";
import ComponentAppPage from "./component";
import "./style.css";

import { useAppDispatch, useAppSelector } from "state";
import { getTodosRequest } from "state/todos/actions";
import { getTodos } from "state/todos/selectors";
import { Todo } from "models/todo";

import { getUserRequest, logout } from "state/user/actions";
import { useNavigate } from "react-router-dom";
import { Filter } from "./types";
import { Routes } from "constants/routes";
import { removeToken } from "utils/token";
import { getUsername } from "state/user/selectors";

const AppPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const todos = useAppSelector(getTodos);
  const username = useAppSelector(getUsername);

  const [filter, setFilter] = useState<Filter>("all");
  const [shownTodos, setShownTodos] = useState<Todo[]>([]);
  //@mock
  // const [staticTodos, setstaticTodos] = useState<Todo[]>(todos);

  useEffect(() => {
    dispatch(getTodosRequest());
    dispatch(getUserRequest());
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
    // dispatch(filterTodos(filter));
  }, [filter]);

  const handleLogout = (): void => {
    dispatch(logout());
    removeToken();
    navigate(Routes.Home);
  };

  const handleChangeFilter = (filter: Filter) => (): void => {
    setFilter(filter);
    //dispatch(filterTodos(filter));
  };

  const handleComplete = (id: number) => (): void => {
    const newTodos = todos?.map((todo) =>
      Number(todo.id) === id ? { ...todo, active: !todo.active } : todo
    );
    setShownTodos(newTodos);
  };

  const activeTodoLength = todos.filter((todo) => todo.active).length;

  return (
    <ComponentAppPage
      username={username}
      filter={filter}
      activeTodoLength={activeTodoLength}
      handleComplete={handleComplete}
      handleChangeFilter={handleChangeFilter}
      handleLogout={handleLogout}
    />
  );
};

export default AppPage;
