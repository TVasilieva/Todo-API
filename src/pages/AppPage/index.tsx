import React from "react";
import InputForAdding from "../../components/InputForAdding";
import ListOfTodos from "../../components/ListOfTodos";
import ShownItems from "../../components/ShownItems";

import { todos } from "../../todos";

function AppPage() {
  return (
    <div className="user-page">
      <h1>todo</h1>
      <InputForAdding />
      <ListOfTodos todos={todos} />
      <ShownItems />
    </div>
  );
}

export default AppPage;
