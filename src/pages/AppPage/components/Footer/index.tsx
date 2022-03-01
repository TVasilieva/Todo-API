import { FC, useEffect } from "react";
import "./style.css";
import Props from "./types";

import ComponentFooter from "./component";
import { Filter } from "pages/AppPage/types";
import { useAppDispatch, useAppSelector } from "state";
import {
  getNumberCompletedTodos,
  getTodos,
  getTodosIsLoading,
} from "state/todos/selectors";
import { filterTodos } from "state/todos/actions";

const Footer: FC<Props> = ({ filter, onChangeFilter, handleLogout }) => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(getTodos);
  const isLoading = useAppSelector(getTodosIsLoading);
  const completedTodosLength = useAppSelector(getNumberCompletedTodos);

  useEffect(() => {
    dispatch(filterTodos(filter));
  }, [filter, completedTodosLength]);

  const activeTodosLength = todos.length - completedTodosLength;

  const isActive = (word: Filter) => {
    return filter === word ? "active-choice" : "categories";
  };

  return (
    <ComponentFooter
      filter={filter}
      isLoading={isLoading}
      activeTodosLength={activeTodosLength}
      completedTodosLength={completedTodosLength}
      onChangeFilter={onChangeFilter}
      handleLogout={handleLogout}
      isActive={isActive}
    />
  );
};

export default Footer;
