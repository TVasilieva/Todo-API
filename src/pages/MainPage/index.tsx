/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import { getIsLoading, getUser } from "state/user/selectors";
import { useAppDispatch, useAppSelector } from "state";
import "./style.scss";

import { getToken } from "utils/token";
import { Routes } from "constants/routes";
import { useNavigate } from "react-router-dom";
import AppModal from "components/Modal";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import { loginRequest, registrationRequest } from "state/user/actions";
import { LoginRequest, RegistrationRequest } from "api/types";

const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const token = getToken();
  const navigate = useNavigate();

  const account = useAppSelector(getUser);
  const isLoading = useAppSelector(getIsLoading);

  const [isInOpen, setIsInOpen] = useState<boolean>(false);
  const [isUpOpen, setIsUpOpen] = useState<boolean>(false);

  useEffect(() => {
    token && navigate(Routes.Todo);
  }, []);

  const toggleInModal = (): void => {
    setIsInOpen(!isInOpen);
  };

  const toggleUpModal = (): void => {
    setIsUpOpen(!isUpOpen);
  };

  const handleSubmitSignIn = ({ email, password }: LoginRequest) => {
    dispatch(
      loginRequest({
        email,
        password,
      })
    );
  };

  const handleSubmitSignUp = ({
    email,
    password,
    name,
  }: RegistrationRequest) => {
    dispatch(
      registrationRequest({
        email,
        password,
        name,
      })
    );
  };

  return (
    <div className="main-page" data-testid="main-link">
      <div className="main-page__greeting">todo app</div>
      {!account && (
        <div className="main-page__btns">
          <button className="main-page__btns_btn" onClick={toggleInModal}>
            Sign In
          </button>
          <button className="main-page__btns_btn" onClick={toggleUpModal}>
            Sign Up
          </button>
        </div>
      )}
      {!!isInOpen && !isUpOpen ? (
        <AppModal
          isOpen={isInOpen}
          onClose={toggleInModal}
          isLoading={isLoading}
        >
          <SignIn onSubmit={handleSubmitSignIn} />
        </AppModal>
      ) : (
        <AppModal
          isOpen={isUpOpen}
          onClose={toggleUpModal}
          isLoading={isLoading}
        >
          <SignUp onSubmit={handleSubmitSignUp} />
        </AppModal>
      )}
    </div>
  );
};

export default MainPage;
