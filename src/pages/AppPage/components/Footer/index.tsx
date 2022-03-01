import { FC, useEffect } from "react";
import "./style.css";
import Props from "./types";

import ComponentFooter from "./component";
import { Filter } from "pages/AppPage/types";
import { useAppDispatch, useAppSelector } from "state";
import { getNumberCompletedTodos, getTodos } from "state/todos/selectors";
import { filterTodos } from "state/todos/actions";

const Footer: FC<Props> = ({ filter, onChangeFilter, handleLogout }) => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(getTodos);
  const completedTodosLength = useAppSelector(getNumberCompletedTodos);

  useEffect(() => {
    dispatch(filterTodos(filter));
  }, [filter]);

  const activeTodosLength = todos.length - completedTodosLength;

  const isActive = (word: Filter) => {
    return filter === word ? "active-choice" : "categories";
  };

  return (
    <ComponentFooter
      filter={filter}
      activeTodosLength={activeTodosLength}
      onChangeFilter={onChangeFilter}
      handleLogout={handleLogout}
      isActive={isActive}
    />
  );
};

export default Footer;
