import { FC } from "react";

import "./style.css";
import ComponentProps from "./types";

const ComponentSignUp: FC<ComponentProps> = ({
  handleChange,
  handleSignUp,
  signUpValue,
  disabled,
  errors,
}) => {
  return (
    <div className="sign-in-form">
      <input
        className="sign-in-input"
        placeholder="Username"
        name="username"
        value={signUpValue.username}
        onChange={handleChange}
      />
      <input
        className="sign-in-input"
        placeholder="Password"
        type="password"
        name="password"
        value={signUpValue.password}
        onChange={handleChange}
      />
      <input
        className="sign-in-input"
        placeholder="Repeat password"
        type="password"
        name="repeatPassword"
        value={signUpValue.repeatPassword}
        onChange={handleChange}
      />
      <input
        className="sign-in-input"
        placeholder="Email"
        name="email"
        value={signUpValue.email}
        onChange={handleChange}
      />
      <button
        className="sign-in-button"
        onClick={handleSignUp}
        disabled={disabled}
      >
        Sign up
      </button>
    </div>
  );
};

export default ComponentSignUp;
