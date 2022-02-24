import React, { FC, useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "state/user/actions";
import { useAppDispatch, useAppSelector } from "state";

import ComponentSignIn from "./component";
import Props, { SignInValue } from "./types";
import { LoginRequest } from "api/auth";
import { getIsLoading, getUser } from "state/user/selectors";
import { Routes } from "constants/routes";

const SignIn: FC<Props> = ({ isOpen, onClose, errors }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const account = useAppSelector(getUser);
  const isLoading = useAppSelector(getIsLoading);

  const [signInValue, setSignIn] = useState<SignInValue>({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (!isLoading && account) navigate(Routes.Todo);
  }, [isLoading]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignIn({ ...signInValue, [name]: value });
  };

  const handleSignIn = (): void => {
    const data: LoginRequest = {
      email: signInValue.email,
      password: signInValue.password,
    };

    dispatch(loginRequest(data));
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <ComponentSignIn
      errors={errors}
      isOpen={isOpen}
      signInValue={signInValue}
      onClose={onClose}
      handleChange={handleChange}
      handleSignIn={handleSignIn}
    />
  );
};

export default SignIn;
