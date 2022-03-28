/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import "./style.scss";

import { useAppSelector } from "state";
import { getIsLoading, getUser } from "state/user/selectors";
import { Routes } from "constants/routes";
import { ComponentProps, InitialValuesSignIn } from "./types";
import { validateSignIn } from "validation";

const initialValues: InitialValuesSignIn = { email: "", password: "" };

const SignIn: FC<ComponentProps> = ({ onSubmit }) => {
  const account = useAppSelector(getUser);
  const isLoading = useAppSelector(getIsLoading);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema: validateSignIn,
    onSubmit: ({ email, password }) => {
      onSubmit({ email, password });
    },
  });

  useEffect(() => {
    if (!isLoading && account) navigate(Routes.Todo);
  }, [isLoading]);

  const { email, password } = formik.values;

  return (
    <form
      className="sign__form"
      onSubmit={formik.handleSubmit}
      data-testid="sign-in"
    >
      <input
        className="sign__input"
        placeholder="Email"
        onBlur={formik.handleBlur}
        name="email"
        value={email}
        onChange={formik.handleChange}
        data-testid="sign-in-email"
      />
      {formik.touched.email && formik.errors.email && (
        <p className="formik_error">{formik.errors.email}</p>
      )}
      <input
        className="sign__input"
        placeholder="Password"
        type="password"
        onBlur={formik.handleBlur}
        name="password"
        value={password}
        onChange={formik.handleChange}
        data-testid="sign-in-password"
      />
      {formik.touched.password && formik.errors.password && (
        <p className="formik_error">{formik.errors.password}</p>
      )}
      <button className="sign__button" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default SignIn;
