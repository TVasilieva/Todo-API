import React, { FC, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "state/user/actions";
import { useAppDispatch, useAppSelector } from "state";

import { useFormik } from "formik";

import ComponentSignIn from "./component";
import Props from "./types";
import { LoginRequest } from "api/auth";
import { getIsLoading, getUser } from "state/user/selectors";
import { Routes } from "constants/routes";
import { getToken } from "utils/token";

const SignIn: FC<Props> = ({ isOpen, onClose }) => {
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
    onSubmit: () => {
      const data: LoginRequest = {
        email: formik.values.email,
        password: formik.values.password,
      };

      dispatch(loginRequest(data));
    },
  });

  return <ComponentSignIn formik={formik} isOpen={isOpen} onClose={onClose} />;
};

export default SignIn;
