import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "state/user/selectors";
import { useAppSelector } from "state";
import "./style.css";

import ComponentMainPage from "./component";

const MainPage: FC = () => {
  const account = useAppSelector(getUser);

  const navigate = useNavigate();

  const openLoginModal = (): void => {
    navigate("/login");
  };

  return (
    <ComponentMainPage account={account} openLoginModal={openLoginModal} />
  );
};

export default MainPage;
