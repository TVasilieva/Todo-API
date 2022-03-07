import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import "./style.css";

import { useAppDispatch, useAppSelector } from "state";
import { registrationRequest } from "state/user/actions";
import { getIsLoading, getUser } from "state/user/selectors";
import { RegistrationRequest } from "api/types";
import { Routes } from "constants/routes";
import { validateSignUp } from "validation";
import { InitialValuesSignUp } from "./types";

const initialValues: InitialValuesSignUp = {
  name: "",
  password: "",
  repeatPassword: "",
  email: "",
};

const SignUp: FC = () => {
  const dispatch = useAppDispatch();

  const account = useAppSelector(getUser);
  const isLoading = useAppSelector(getIsLoading);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema: validateSignUp,
    onSubmit: () => {
      const data: RegistrationRequest = {
        name,
        email,
        password,
      };

      dispatch(registrationRequest(data));
    },
  });

  useEffect(() => {
    if (!isLoading && account) navigate(Routes.Todo);
  }, [isLoading]);

  const { name, password, email, repeatPassword } = formik.values;

  return (
    <form className="sign-in-form" onSubmit={formik.handleSubmit}>
      <input
        className="sign-in-input"
        placeholder="Username"
        onBlur={formik.handleBlur}
        name="name"
        value={name}
        onChange={formik.handleChange}
      />
      {formik.touched.name && formik.errors.name && (
        <p className="formik_error">{formik.errors.name}</p>
      )}
      <input
        className="sign-in-input"
        placeholder="Password"
        type="password"
        onBlur={formik.handleBlur}
        name="password"
        value={password}
        onChange={formik.handleChange}
      />
      {formik.touched.password && formik.errors.password && (
        <p className="formik_error">{formik.errors.password}</p>
      )}
      <input
        className="sign-in-input"
        placeholder="Repeat password"
        type="password"
        onBlur={formik.handleBlur}
        name="repeatPassword"
        value={repeatPassword}
        onChange={formik.handleChange}
      />
      {formik.touched.repeatPassword && formik.errors.repeatPassword && (
        <p className="formik_error">{formik.errors.repeatPassword}</p>
      )}
      <input
        className="sign-in-input"
        placeholder="Email"
        onBlur={formik.handleBlur}
        name="email"
        value={email}
        onChange={formik.handleChange}
      />
      {formik.touched.email && formik.errors.email && (
        <p className="formik_error">{formik.errors.email}</p>
      )}
      <button type="submit" className="sign-in-button" disabled={!formik.dirty}>
        Sign up
      </button>
    </form>
  );
};

export default SignUp;
