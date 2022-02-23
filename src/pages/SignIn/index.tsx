import React, { FC, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "state/user/actions";
import { useAppDispatch } from "state";

import ComponentSignIn from "./component";
import Props, { SignInValue } from "./types";
import { LoginRequest } from "api/auth";

const SignIn: FC<Props> = ({ isOpen, onClose, errors }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [signInValue, setSignIn] = useState<SignInValue>({
    email: "",
    password: "",
  });

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
    navigate("/todo");
  };

  return (
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
