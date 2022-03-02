import React, { FC, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "state/user/actions";
import { useAppDispatch, useAppSelector } from "state";

import { useFormik } from "formik";
import * as Yup from "yup";

import ComponentSignIn from "./component";
import { Inputs } from "../SignUp/types";
import { LoginRequest } from "api/auth";
import { getIsLoading, getUser } from "state/user/selectors";
import { Routes } from "constants/routes";
import { getToken } from "utils/token";

const SignIn: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = getToken();
  const account = useAppSelector(getUser);
  const isLoading = useAppSelector(getIsLoading);

  useEffect(() => {
    if (!isLoading && account) navigate(Routes.Todo);
  }, [isLoading, account, token]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: () => {
      const data: LoginRequest = {
        email,
        password,
      };

      dispatch(loginRequest(data));
    },
  });
  const { email, password } = formik.values;

  const inputs: Inputs[] = [
    {
      placeholder: "Email",
      name: "email",
      value: email,
      error: formik.errors.email,
      touched: formik.touched.email,
    },
    {
      placeholder: "Password",
      name: "password",
      value: password,
      type: "password",
      error: formik.errors.password,
      touched: formik.touched.password,
    },
  ];

  const signInInputs = inputs.map((input) => {
    return (
      <React.Fragment key={input.placeholder}>
        <input
          className="sign-in-input"
          placeholder="Email"
          type={input.type}
          onBlur={formik.handleBlur}
          name={input.name}
          value={input.value}
          onChange={formik.handleChange}
        />
        {input.touched && input.error && (
          <p className="formik_error">{input.error}</p>
        )}
      </React.Fragment>
    );
  });

  return <ComponentSignIn formik={formik} signInInputs={signInInputs} />;
};

export default SignIn;
