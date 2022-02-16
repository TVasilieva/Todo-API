import React, { FC, useState } from "react";
import "./App.scss";
import Layout from "./components/Layout";
import InputForAdding from "./components/InputForAdding";
import ListOfTodos from "./components/ListOfTodos";
import Login from "./components/Login";
import ShownItems from "./components/ShownItems";
import { todos } from "./todos";

const App: FC = () => {
  const [isOpened, seiIsOpened] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);

  return (
    <Layout>
      {false ? (
        <>
          <h2 className="greeting">todo app</h2>
          {isOpened && <Login />}
          <button className="login-btn" onClick={() => {}} />
        </>
      ) : (
        <>
          <h1>todo</h1>
          <InputForAdding />
          <ListOfTodos todos={todos} />
          <ShownItems />
        </>
      )}
    </Layout>
  );
};

export default App;
