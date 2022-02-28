import React, { FC, useEffect, useState } from "react";
import ComponentAppPage from "./component";
import "./style.css";

import { useAppDispatch, useAppSelector } from "state";
import {
  getNumberCompletedTodosRequest,
  getTodosRequest,
} from "state/todos/actions";

import { getUserRequest, logout } from "state/user/actions";
import { useNavigate } from "react-router-dom";
import { Filter } from "./types";
import { Routes } from "constants/routes";
import { removeToken } from "utils/token";
import { getUsername } from "state/user/selectors";

const AppPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const username = useAppSelector(getUsername);

  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    dispatch(getTodosRequest());
    dispatch(getUserRequest());
    dispatch(getNumberCompletedTodosRequest());
  }, []);

  const handleLogout = (): void => {
    dispatch(logout());
    removeToken();
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
