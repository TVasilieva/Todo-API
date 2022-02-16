import React, { FC, Fragment } from "react";

import CloseIcon from "@mui/icons-material/Close";

import "./style.css";
import ComponentProps, { LoginHeader, SignUp } from "./types";
import { useNavigate } from "react-router-dom";
import LoginPortal from "../LoginPortal";

const Login: FC<ComponentProps> = ({ onClose }) => {
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

  const signIn: SignUp[] = [
    { htmlFor: "sign-user", name: "Username", type: "text" },
    {
      htmlFor: "sign-pass",
      name: "Password",
      type: "password",
      "data-type": "password",
    },
  ];

  const signUp: SignUp[] = [
    { htmlFor: "user", name: "Username", type: "text" },
    {
      htmlFor: "pass",
      name: "Password",
      type: "password",
      "data-type": "password",
    },
    {
      htmlFor: "repeat-pass",
      name: "Repeat Password",
      type: "password",
      "data-type": "password",
    },
    { htmlFor: "email", name: "Email Address", type: "text" },
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
        />
      </div>
    );
  });

  const signBtn: string[] = ["Sign In", "Sign Up"];

  let navigate = useNavigate();

  const letUserEntrance = (): void => {
    false ? navigate("/todo") : navigate("/");
  };

  const signBtns = signBtn.map((el) => {
    return (
      <div className="group" key={el}>
        <input
          type="submit"
          className="button"
          value={el}
          onClick={letUserEntrance}
        />
      </div>
    );
  });

  const closeLoginModal = (): void => {
    navigate("/");
  };

  return (
    <LoginPortal>
      <div className="login-wrap">
        <div className="login-html">
          <div className="close-login" onClick={closeLoginModal}>
            <CloseIcon fontSize="large" color="info" />
          </div>
          {loginHeader}
          <div className="login-form">
            <div className="sign-in-htm">
              {signInGroup}
              <div className="group">
                <input id="check" type="checkbox" className="check" />
                <label htmlFor="check">
                  <span className="icon"></span> Keep me Signed in
                </label>
              </div>
              {signBtns[0]}
            </div>
            <div className="sign-up-htm">
              {signUpGroup}
              {signBtns[1]}
            </div>
          </div>
        </div>
      </div>
    </LoginPortal>
  );
};

export default Login;
