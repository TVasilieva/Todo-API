import React, { FC, useState } from "react";
import "./App.css";
import InputForAdding from "./components/InputForAdding";
import ListOfTodos from "./components/ListOfTodos";
import ShownItems from "./components/ShownItems";
import { todos } from "./todos";

const App: FC = () => {
  const [completed, setCompleted] = useState<boolean>(false);

  return (
    <>
      <div className="bg-image">
        <div className="container">
          <h1>todo</h1>
          <InputForAdding />
          <ListOfTodos todos={todos} />
          <ShownItems />
        </div>
      </div>
    </>
  );
};

export default App;
