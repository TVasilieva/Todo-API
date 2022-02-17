import React, { FC, Fragment, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

import "./style.css";
import ComponentProps, {
  LoginHeader,
  SignUp,
  SignIn,
  StateProps,
  DispatchProps,
  SignInInputs,
  SignUpInputs,
} from "./types";
import { useNavigate } from "react-router-dom";
import LoginPortal from "../LoginPortal";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { setUser } from "state/user/actions";
import { User } from "user";

const Login: FC<ComponentProps> = ({ onClose, setUser, user }) => {
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignIn({ ...signInValue, [name]: value });
    setSignUp({ ...signUpValue, [name]: value });
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

  const signBtn: string[] = ["Sign In", "Sign Up"];

  let navigate = useNavigate();

  const letUserEntrance = (): void => {
    const usersLS: string = localStorage.getItem("users") || "[]";
    const currentUser: User = JSON.parse(usersLS).filter(
      (el: User) => el.username === "Eric Cartman"
    );
    currentUser && setUser(currentUser);
    console.log(currentUser);
    console.log(user);
    currentUser ? navigate("/todo") : navigate("/");
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

const mapStateToProps = (state: any): StateProps => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  setUser: (user: User) => {
    dispatch(setUser(user));
  },
});

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Login);
