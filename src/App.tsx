import React, { FC, useState } from "react";

import "./App.scss";

import Layout from "./components/Layout";
import InputForAdding from "./components/InputForAdding";
import ListOfTodos from "./components/ListOfTodos";
import Login from "./components/Login";
import ShownItems from "./components/ShownItems";
import LoginPortal from "./components/LoginPortal";

import { todos } from "./todos";

const App: FC = () => {
  const [user, setUser] = useState<boolean>(false);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);

  const closeLoginModal = (): void => {
    setIsOpened(false);
  };

  return (
    <Layout>
      {!user ? (
        <>
          {isOpened && (
            <LoginPortal>
              <Login onClose={closeLoginModal} />
            </LoginPortal>
          )}
          {!isOpened && !user && (
            <>
              <h2 className="greeting">todo app</h2>
              <button
                className="login-btn"
                onClick={() => {
                  setIsOpened(!isOpened);
                }}
              >
                Login
              </button>
            </>
          )}
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
