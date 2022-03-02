import { FC } from "react";
import "./style.css";
import { registrationRequest } from "state/user/actions";
import { useAppDispatch } from "state";

import ComponentSignUp from "./component";
import ComponentProps, { SignUpInputs } from "./types";
import { RegistrationRequest } from "api/auth";

import { useFormik } from "formik";

const SignUp: FC<ComponentProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      repeatPassword: "",
      email: "",
    },
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

  const disabled = !email && !password && !repeatPassword;

  const inputs: SignUpInputs[] = [
    { placeholder: "Username", name: "name", value: formik.values.name },
    {
      placeholder: "Password",
      name: "password",
      value: formik.values.password,
      type: "password",
    },
    {
      placeholder: "Repeat password",
      name: "repeatPassword",
      value: formik.values.repeatPassword,
      type: "password",
    },
    { placeholder: "Email", name: "email", value: formik.values.email },
  ];

  const signUpInputs = inputs.map((input) => {
    return (
      <input
        className="sign-in-input"
        placeholder={input.placeholder}
        type={input.type}
        name={input.name}
        value={input.value}
        onChange={formik.handleChange}
      />
    );
  });

  return (
    <ComponentSignUp
      isOpen={isOpen}
      onClose={onClose}
      formik={formik}
      signUpInputs={signUpInputs}
    />
  );
};

export default SignUp;
