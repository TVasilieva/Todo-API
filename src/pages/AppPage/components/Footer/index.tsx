import { FC } from "react";
import "./style.css";
import Props from "./types";

import ComponentFooter from "./component";
import { Filter } from "pages/AppPage/types";
import { useAppSelector } from "state";
import { getNumberCompletedTodos, getTodos } from "state/todos/selectors";

const Footer: FC<Props> = ({ filter, onChangeFilter, handleLogout }) => {
  const todos = useAppSelector(getTodos);
  const completedTodosLength = useAppSelector(getNumberCompletedTodos);

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
