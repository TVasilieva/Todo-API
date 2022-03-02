import { FC, useEffect, useState } from "react";
import { getIsLoading, getUser } from "state/user/selectors";
import { useAppSelector } from "state";
import "./style.css";

import ComponentMainPage from "./component";
import { Errors } from "./types";
import { getToken } from "utils/token";
import { Routes } from "constants/routes";
import { useNavigate } from "react-router-dom";

const MainPage: FC = () => {
  const token = getToken();
  const navigate = useNavigate();

  const account = useAppSelector(getUser);
  const isLoading = useAppSelector(getIsLoading);

  const [isInOpen, setIsInOpen] = useState<boolean>(false);
  const [isUpOpen, setIsUpOpen] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({
    accountExcists: "",
    notEqualPasswords: "",
    wrongEmailOrPassword: "",
    notValidEmail: "",
    notValidPassword: "",
  });

  useEffect(() => {
    token && navigate(Routes.Todo);
  }, []);

  const toggleInModal = (): void => {
    setIsInOpen(!isInOpen);
  };

  const toggleUpModal = (): void => {
    setIsUpOpen(!isUpOpen);
  };

  return (
    <ComponentMainPage
      account={account}
      isLoading={isLoading}
      errors={errors}
      toggleInModal={toggleInModal}
      toggleUpModal={toggleUpModal}
      isInOpen={isInOpen}
      isUpOpen={isUpOpen}
    />
  );
};

export default MainPage;
