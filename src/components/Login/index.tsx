import React, { FC, Fragment, useState } from "react";
import "./style.css";
import { LoginHeader, SignUp, SignIn, SignBtn } from "./types";
import { useNavigate } from "react-router-dom";
import { getUser } from "state/user/selectors";
import { setAccount } from "state/user/actions";
import { useAppDispatch, useAppSelector } from "state";
import usePortal from "react-useportal";

import ComponentLogin from "./component";
import { User } from "models/user";

const Login: FC = () => {
  const dispatch = useAppDispatch();

  const account = useAppSelector(getUser);

  const [signInValue, setSignIn] = useState<any>({
    usernameIn: "",
    passwordIn: "",
  });

  const [signUpValue, setSignUp] = useState<any>({
    username: "",
    password: "",
    repeatPassword: "",
    email: "",
  });

  const { Portal } = usePortal({
    bindTo: document && (document.getElementById("portal-root") as HTMLElement),
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignIn({ ...signInValue, [name]: value });
    setSignUp({ ...signUpValue, [name]: value });
  };

  let navigate = useNavigate();

  const handleSignIn = (): void => {
    const usersLS: string = localStorage.getItem("users") || "[]";
    const currentUser = JSON.parse(usersLS).find((user: User) => user.id === 8);
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

  const handleSignUp = (): void => {
    const usersLS: string = localStorage.getItem("users") || "[]";
    const excistingUser = JSON.parse(usersLS).find(
      (user: User) => user.id === 8
    );
    if (!excistingUser) {
      dispatch(
        setAccount({
          id: signUpValue.id,
          username: signUpValue.username,
          password: signUpValue.password,
          email: signUpValue.email,
        })
      );
    }
    if (account) navigate("/todo");
  };

  const loginHeaderInfo: LoginHeader[] = [
    { id: "tab-1", className: "sign-in", name: "In", checked: true },
    { id: "tab-2", className: "sign-up", name: "Up", checked: false },
  ];

  const loginHeader = loginHeaderInfo.map((el) => {
    return (
      <Fragment key={el.id}>
        <input
          id={el.id}
          type="radio"
          name="tab"
          className={el.className}
          defaultChecked={el.checked}
        />
        <label htmlFor={el.id} className="tab">
          Sign {el.name}
        </label>
      </Fragment>
    );
  });

  const signIn: SignIn[] = [
    {
      htmlFor: "sign-user",
      name: "Username",
      type: "text",
      value: "usernameIn",
    },
    {
      htmlFor: "sign-pass",
      name: "Password",
      type: "password",
      "data-type": "password",
      value: "passwordIn",
    },
  ];

  const signUp: SignUp[] = [
    { htmlFor: "user", name: "Username", type: "text", value: "username" },
    {
      htmlFor: "pass",
      name: "Password",
      type: "password",
      "data-type": "password",
      value: "password",
    },
    {
      htmlFor: "repeat-pass",
      name: "Repeat Password",
      type: "password",
      "data-type": "password",
      value: "repeatPassword",
    },
    { htmlFor: "email", name: "Email Address", type: "text", value: "email" },
  ];

  const signInGroup = signIn.map((el) => {
    return (
      <div className="group" key={Math.random()}>
        <label htmlFor={el.htmlFor} className="label">
          {el.name}
        </label>
        <input
          id={el.htmlFor}
          type={el.type}
          className="input"
          data-type={el["data-type"]}
          name={el.value}
          value={signInValue[el.value]}
          onChange={handleChange}
        />
      </div>
    );
  });

  const signUpGroup = signUp.map((el) => {
    return (
      <div className="group" key={Math.random()}>
        <label htmlFor={el.htmlFor} className="label">
          {el.name}
        </label>
        <input
          id={el.htmlFor}
          type={el.type}
          className="input"
          data-type={el["data-type"]}
          name={el.value}
          value={signUpValue[el.value]}
          onChange={handleChange}
        />
      </div>
    );
  });

  const signBtn: SignBtn[] = [
    { name: "Sign In", onClick: handleSignIn },
    { name: "Sign Up", onClick: handleSignUp },
  ];

  const signBtns = signBtn.map((el) => {
    return (
      <div className="group" key={el.name}>
        <input
          type="submit"
          className="button"
          value={el.name}
          onClick={el.onClick}
        />
      </div>
    );
  });

  const closeLoginModal = (): void => {
    navigate("/");
  };

  return (
    <Portal>
      <ComponentLogin
        closeLoginModal={closeLoginModal}
        loginHeader={loginHeader}
        signInGroup={signInGroup}
        signUpGroup={signUpGroup}
        signBtns={signBtns}
      />
    </Portal>
  );
};

export default Login;
