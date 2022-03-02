import { FC } from "react";

import "./style.css";
import ComponentProps from "./types";

const ComponentSignIn: FC<ComponentProps> = ({ formik }) => {
  return (
    <form className="sign-in-form" onSubmit={formik.handleSubmit}>
      <input
        className="sign-in-input"
        placeholder="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <input
        className="sign-in-input"
        placeholder="Password"
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <button className="sign-in-button" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default ComponentSignIn;
