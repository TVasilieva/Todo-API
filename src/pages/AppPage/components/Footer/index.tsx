import React, { FC } from "react";
import "./style.css";
import Props from "./types";

import ComponentFooter from "./component";
import { Filter } from "pages/AppPage/types";
import { useAppSelector } from "state";
import { getNumberCompletedTodos } from "state/todos/selectors";

const Footer: FC<Props> = ({ filter, onChangeFilter, handleLogout }) => {
  const completedTodosLength = useAppSelector(getNumberCompletedTodos);
  const isActive = (word: Filter) => {
    return filter === word ? "active-choice" : "categories";
  };

  return (
    <ComponentFooter
      filter={filter}
      completedTodosLength={completedTodosLength}
      onChangeFilter={onChangeFilter}
      handleLogout={handleLogout}
      isActive={isActive}
    />
  );
};

export default Footer;
