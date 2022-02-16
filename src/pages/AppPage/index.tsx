import React, { FC, useState } from "react";
import InputForAdding from "../../components/InputForAdding";
import ListOfTodos from "../../components/ListOfTodos";
import ShownItems from "../../components/ShownItems";

import { todos } from "../../todos";
import ComponentProps from "./types";
import "./style.css";

const AppPage: FC<ComponentProps> = () => {
  const [completed, setCompleted] = useState<boolean>(false);

  return (
    <div className="user-page">
      <h1>todo</h1>
      <InputForAdding />
      <ListOfTodos todos={todos} />
      <ShownItems />
    </div>
  );
};

export default AppPage;
