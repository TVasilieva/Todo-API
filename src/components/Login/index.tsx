import React, { FC } from "react";

import "./style.css";
import ComponentProps, { LoginHeader, SignUp } from "./types";

const Login: FC<ComponentProps> = (props) => {
  const loginHeaderInfo: LoginHeader[] = [
    { id: "tab-1", className: "sign-in", name: "In" },
    { id: "tab-2", className: "sign-up", name: "Up" },
  ];

  const loginHeader = loginHeaderInfo.map((el) => {
    return (
      <>
        <input
          id={el.id}
          type="radio"
          name="tab"
          className={el.className}
          checked
        />
        <label htmlFor={el.id} className="tab">
          Sign {el.name}
        </label>
      </>
    );
  });

  const signUp: SignUp[] = [
    { htmlFor: "user", name: "Username", type: "text" },
    {
      htmlFor: "pass",
      name: "Password",
      type: "password",
      "data-type": "password",
    },
    {
      htmlFor: "pass",
      name: "Repeat Password",
      type: "password",
      "data-type": "password",
    },
    { htmlFor: "pass", name: "Email Address", type: "text" },
  ];

  const signUpGroup = signUp.map((el) => {
    return (
      <div className="group">
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

  const signBtns = signBtn.map((el) => {
    return (
      <div className="group">
        <input type="submit" className="button" value={el} />
      </div>
    );
  });

  return (
    <div className="login-wrap">
      <div className="login-html">
        {loginHeader}
        <div className="login-form">
          <div className="sign-in-htm">
            {signUpGroup[0]}
            {signUpGroup[1]}
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
  );
};

export default Login;
