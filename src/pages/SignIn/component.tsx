import { FC } from "react";

import "./style.css";
import ComponentProps from "./types";

const ComponentSignIn: FC<ComponentProps> = ({
  handleChange,
  handleSignIn,
  signInValue,
  errors,
}) => {
  return (
    <div className="sign-in-form">
      <input
        className="sign-in-input"
        placeholder="Email"
        name="email"
        value={signInValue.email}
        onChange={handleChange}
      />
      <input
        className="sign-in-input"
        placeholder="Password"
        type="password"
        name="password"
        value={signInValue.password}
        onChange={handleChange}
      />
      <button className="sign-in-button" onClick={handleSignIn}>
        Sign in
      </button>
      {errors.wrongEmailOrPassword && (
        <input className="error">{errors.wrongEmailOrPassword}</input>
      )}
    </div>
  );
};

export default ComponentSignIn;
