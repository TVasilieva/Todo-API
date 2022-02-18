import React, { FC, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { setAccount } from "state/user/actions";
import { useAppDispatch } from "state";

import ComponentSignIn from "./component";
import { User } from "models/user";
import Props, { SignInValue } from "./types";

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
    const usersLS: string = localStorage.getItem("users") || "[]";
    const currentUser = JSON.parse(usersLS).find(
      (user: User) =>
        user.email === signInValue.email &&
        user.password === signInValue.password
    );

    if (currentUser) {
      dispatch(
        setAccount({
          id: currentUser.id,
          username: currentUser.username,
          password: currentUser.password,
          email: currentUser.email,
        })
      );
    }
    if (currentUser) navigate("/todo");
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
