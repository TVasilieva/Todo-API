import React, { FC } from "react";
import "./style.css";
import Props from "./types";

import ComponentFooter from "./component";
import { Filter } from "pages/AppPage/types";

const Footer: FC<Props> = ({
  filter,
  activeTodoLength,
  onChangeFilter,
  handleLogout,
}) => {
  const isActive = (word: Filter) => {
    return filter === word ? "active-choice" : "categories";
  };

  return (
    <ComponentFooter
      filter={filter}
      activeTodoLength={activeTodoLength}
      onChangeFilter={onChangeFilter}
      handleLogout={handleLogout}
      isActive={isActive}
    />
  );
};

export default Footer;
