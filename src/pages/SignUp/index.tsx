import React, { FC } from "react";
import "./style.css";
import { registrationRequest } from "state/user/actions";
import { useAppDispatch } from "state";

import ComponentSignUp from "./component";
import ComponentProps, { Inputs } from "./types";
import { RegistrationRequest } from "api/auth";

import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp: FC<ComponentProps> = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      repeatPassword: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Must be at least 3 characters")
        .max(40, "Must be 40 characters or less")
        .required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Password must be at least 8 characters"),
      repeatPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: () => {
      const data: RegistrationRequest = {
        name,
        email,
        password,
      };

      dispatch(registrationRequest(data));
    },
  });

  const { name, password, email, repeatPassword } = formik.values;

  const inputs: Inputs[] = [
    {
      placeholder: "Username",
      name: "name",
      value: name,
      error: formik.errors.name,
      touched: formik.touched.name,
    },
    {
      placeholder: "Password",
      name: "password",
      value: password,
      type: "password",
      error: formik.errors.password,
      touched: formik.touched.password,
    },
    {
      placeholder: "Repeat password",
      name: "repeatPassword",
      value: repeatPassword,
      type: "password",
      error: formik.errors.repeatPassword,
      touched: formik.touched.repeatPassword,
    },
    {
      placeholder: "Email",
      name: "email",
      value: email,
      error: formik.errors.email,
      touched: formik.touched.email,
    },
  ];

  const signUpInputs = inputs.map((input) => {
    return (
      <React.Fragment key={input.placeholder}>
        <input
          className="sign-in-input"
          placeholder={input.placeholder}
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

  return <ComponentSignUp formik={formik} signUpInputs={signUpInputs} />;
};

export default SignUp;
