import React, { FC, useState } from "react";
import InputForAdding from "../../components/InputForAdding";
import ListOfTodos from "../../components/ListOfTodos";
import ShownItems from "../../components/ShownItems";

import { Todos, todos } from "../../todos";
import ComponentProps from "./types";
import "./style.css";

const AppPage: FC<ComponentProps> = () => {
  const [completed, setCompleted] = useState<boolean>(false);
  const [sortedTodos, setSortedTodos] = useState<Todos[]>([]);

  return (
    <div className="user-page">
      <h1>todo</h1>
      <InputForAdding />
      <ListOfTodos todos={sortedTodos} />
      <ShownItems />
    </div>
  );
};

export default AppPage;
