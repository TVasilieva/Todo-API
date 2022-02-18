import { FC, useState } from "react";
import { getUser } from "state/user/selectors";
import { useAppSelector } from "state";
import "./style.css";

import ComponentMainPage from "./component";
import { Errors } from "./types";

const MainPage: FC = () => {
  const account = useAppSelector(getUser);

  const [isInOpen, setIsInOpen] = useState<boolean>(false);
  const [isUpOpen, setIsUpOpen] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({
    accountExcists: "",
    notEqualPasswords: "",
    wrongEmailOrPassword: "",
    notValidEmail: "",
    notValidPassword: "",
  });

  const toggleInModal = (): void => {
    setIsInOpen(!isInOpen);
  };

  const toggleUpModal = (): void => {
    setIsUpOpen(!isUpOpen);
  };

  return (
    <ComponentMainPage
      account={account}
      errors={errors}
      toggleInModal={toggleInModal}
      toggleUpModal={toggleUpModal}
      isInOpen={isInOpen}
      isUpOpen={isUpOpen}
    />
  );
};

export default MainPage;
