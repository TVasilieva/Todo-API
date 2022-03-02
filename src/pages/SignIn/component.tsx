import { FC } from "react";

import "./style.css";
import ComponentProps from "./types";

const ComponentSignIn: FC<ComponentProps> = ({ formik, signInInputs }) => {
  return (
    <form className="sign-in-form" onSubmit={formik.handleSubmit}>
      {signInInputs}
      <button className="sign-in-button" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default ComponentSignIn;
