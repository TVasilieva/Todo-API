import React, { FC } from "react";
import InputForAdding from "components/InputForAdding";
import ListOfTodos from "components/ListOfTodos";
import ShownItems from "pages/AppPage/components/ShownItems";

import ComponentProps from "./types";
import "./style.css";

const ComponentAppPage: FC<ComponentProps> = ({
  account,
  filter,
  activeTodoLength,
  handleComplete,
  handleChangeFilter,
  handleLogout,
}) => {
  return (
    <div className="user-page">
      <h1>todo</h1>
      {account && <h2>Welcome, {account.username}!</h2>}
      <InputForAdding />
      <ListOfTodos setShownTodos={handleComplete} />
      <ShownItems
        filter={filter}
        activeTodoLength={activeTodoLength}
        onChangeFilter={handleChangeFilter}
        handleLogout={handleLogout}
      />
    </div>
  );
};

export default ComponentAppPage;
