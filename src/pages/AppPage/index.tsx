import { FC, useEffect, useState } from "react";
import ComponentAppPage from "./component";
import "./style.css";

import { useAppDispatch, useAppSelector } from "state";
import {
  getNumberCompletedTodosRequest,
  getTodosRequest,
} from "state/todos/actions";

import { getUserRequest, logoutRequest } from "state/user/actions";
import { useNavigate } from "react-router-dom";
import { Filter } from "./types";
import { Routes } from "constants/routes";
import { getIsLoading, getUser, getUsername } from "state/user/selectors";
import { getTodos } from "state/todos/selectors";

const AppPage: FC = () => {
  const dispatch = useAppDispatch();

  const account = useAppSelector(getUser);
  const username = useAppSelector(getUsername);
  const todos = useAppSelector(getTodos);
  const isLoading = useAppSelector(getIsLoading);

  const navigate = useNavigate();

  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    if (todos && !isLoading) dispatch(getTodosRequest());
    if (!account && !isLoading) dispatch(getUserRequest());
    if (todos && !isLoading) dispatch(getNumberCompletedTodosRequest());
  }, []);

  const handleLogout = (): void => {
    dispatch(logoutRequest());
    navigate(Routes.Home);
  };

  const handleChangeFilter = (filter: Filter) => (): void => {
    setFilter(filter);
  };

  return (
    <ComponentAppPage
      username={username}
      filter={filter}
      handleChangeFilter={handleChangeFilter}
      handleLogout={handleLogout}
    />
  );
};

export default AppPage;
