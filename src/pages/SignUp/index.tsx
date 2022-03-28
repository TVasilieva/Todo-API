/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import "./style.scss";

import { useAppSelector } from "state";
import { getIsLoading, getUser } from "state/user/selectors";
import { Routes } from "constants/routes";
import { validateSignUp } from "validation";
import { ComponentProps, InitialValuesSignUp } from "./types";

const initialValues: InitialValuesSignUp = {
  name: "",
  password: "",
  repeatPassword: "",
  email: "",
};

const SignUp: FC<ComponentProps> = ({ onSubmit }) => {
  const account = useAppSelector(getUser);
  const isLoading = useAppSelector(getIsLoading);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema: validateSignUp,
    onSubmit: ({ name, email, password }): void => {
      onSubmit({ name, email, password });
    },
  });

  useEffect(() => {
    if (!isLoading && account) navigate(Routes.Todo);
  }, [isLoading]);

  const { name, password, email, repeatPassword } = formik.values;

  return (
    <form
      className="sign__form"
      onSubmit={formik.handleSubmit}
      data-testid="sign-up"
    >
      <input
        className="sign__input"
        placeholder="Username"
        onBlur={formik.handleBlur}
        name="name"
        value={name}
        onChange={formik.handleChange}
        data-testid="sign-up-username"
      />
      {formik.touched.name && formik.errors.name && (
        <p className="formik_error">{formik.errors.name}</p>
      )}
      <input
        className="sign__input"
        placeholder="Password"
        type="password"
        onBlur={formik.handleBlur}
        name="password"
        value={password}
        onChange={formik.handleChange}
        data-testid="sign-up-password"
      />
      {formik.touched.password && formik.errors.password && (
        <p className="formik_error">{formik.errors.password}</p>
      )}
      <input
        className="sign__input"
        placeholder="Repeat password"
        type="password"
        onBlur={formik.handleBlur}
        name="repeatPassword"
        value={repeatPassword}
        onChange={formik.handleChange}
        data-testid="sign-up-repeat-password"
      />
      {formik.touched.repeatPassword && formik.errors.repeatPassword && (
        <p className="formik_error">{formik.errors.repeatPassword}</p>
      )}
      <input
        className="sign__input"
        placeholder="Email"
        onBlur={formik.handleBlur}
        name="email"
        value={email}
        onChange={formik.handleChange}
        data-testid="sign-up-email"
      />
      {formik.touched.email && formik.errors.email && (
        <p className="formik_error">{formik.errors.email}</p>
      )}
      <button type="submit" className="sign__button" disabled={!formik.dirty}>
        Sign up
      </button>
    </form>
  );
};

export default SignUp;
