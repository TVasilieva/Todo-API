import { FC } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import Grow from "@mui/material/Grow";

const DropdownMenu: FC<any> = ({ profile, todos, logout, isOpened }) => {
  return (
    <Grow in={isOpened}>
      <ul className="menu" data-testid="dropdown-menu">
        <li key="Profile" className="menu__item">
          <Link to={profile} className="menu__item_link">
            Profile
          </Link>
        </li>
        <li key="Todos" className="menu__item">
          <Link to={todos} className="menu__item_link">
            Todos
          </Link>
        </li>
        <li
          key="Logout"
          className="menu__item"
          data-testid="logout"
          onClick={logout}
        >
          Logout
        </li>
      </ul>
    </Grow>
  );
};

export default DropdownMenu;
