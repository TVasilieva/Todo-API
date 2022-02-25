import React, { FC } from "react";
import Textarea from "components/Textarea";
import ListOfTodos from "pages/AppPage/components/ListOfTodos";
import Footer from "pages/AppPage/components/Footer";

import ComponentProps from "./types";
import "./style.css";

const ComponentAppPage: FC<ComponentProps> = ({
  username,
  filter,
  handleChangeFilter,
  handleLogout,
}) => {
  return (
    <div className="user-page">
      <h1>todo</h1>
      {username && <h2>Welcome, {username}!</h2>}
      <Textarea />
      <ListOfTodos />
      <Footer
        filter={filter}
        onChangeFilter={handleChangeFilter}
        handleLogout={handleLogout}
      />
    </div>
  );
};

export default ComponentAppPage;
