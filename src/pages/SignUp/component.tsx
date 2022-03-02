import { FC } from "react";

import "./style.css";
import ComponentProps from "./types";

const ComponentSignUp: FC<ComponentProps> = ({ formik, signUpInputs }) => {
  return (
    <form className="sign-in-form" onSubmit={formik.handleSubmit}>
      {signUpInputs}
      <button
        type="submit"
        className="sign-in-button"
        disabled={!(formik.isValid && formik.dirty)}
      >
        Sign up
      </button>
    </form>
  );
};

export default ComponentSignUp;
