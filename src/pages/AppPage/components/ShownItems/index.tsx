import React, { FC } from "react";
import "./style.css";
import Props from "./types";

import ComponentShownItems from "./component";
import { Filter } from "models/filter";

const ShownItems: FC<Props> = ({
  filter,
  activeTodoLength,
  onChangeFilter,
  handleLogout,
}) => {
  const isActive = (word: Filter) => {
    return filter === word ? "active-choice" : "categories";
  };

  return (
    <ComponentShownItems
      filter={filter}
      activeTodoLength={activeTodoLength}
      onChangeFilter={onChangeFilter}
      handleLogout={handleLogout}
      isActive={isActive}
    />
  );
};

export default ShownItems;
