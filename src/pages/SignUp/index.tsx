import React, { FC, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { getUser } from "state/user/selectors";
import { setAccount } from "state/user/actions";
import { createTodoList } from "state/todos/actions";
import { useAppDispatch, useAppSelector } from "state";

import ComponentSignUp from "./component";
import { User } from "models/user";
import ComponentProps, { SignUpValue } from "./types";

let id = 1000;

const SignUp: FC<ComponentProps> = ({ isOpen, onClose, errors }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const account = useAppSelector(getUser);

  const [signUpValue, setSignUp] = useState<SignUpValue>({
    username: "",
    password: "",
    repeatPassword: "",
    email: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUp({ ...signUpValue, [name]: value });
  };

  const handleSignUp = (): void => {
    const usersLS: string = localStorage.getItem("users") || "[]";
    const excistingUser = JSON.parse(usersLS).find(
      (user: User) => user.email === signUpValue.email
    );
    if (!excistingUser && signUpValue.password === signUpValue.repeatPassword) {
      const newId = id++;
      dispatch(
        setAccount({
          id: newId,
          username: signUpValue.username,
          password: signUpValue.password,
          email: signUpValue.email,
        })
      );
      dispatch(
        createTodoList({
          id: newId,
          listOfTodos: [],
        })
      );
    }
    if (account) navigate("/todo");
  };
  const disabled =
    !signUpValue.email && !signUpValue.password && !signUpValue.repeatPassword;

  return (
    <ComponentSignUp
      errors={errors}
      isOpen={isOpen}
      onClose={onClose}
      disabled={disabled}
      signUpValue={signUpValue}
      handleChange={handleChange}
      handleSignUp={handleSignUp}
    />
  );
};

export default SignUp;
