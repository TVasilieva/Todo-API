import React, { FC, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { registrationRequest } from "state/user/actions";
import { useAppDispatch } from "state";

import ComponentSignUp from "./component";
import ComponentProps, { SignUpValue } from "./types";
import { RegistrationRequest } from "api/auth";

//let id = 1000;

const SignUp: FC<ComponentProps> = ({ isOpen, onClose, errors }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [signUpValue, setSignUp] = useState<SignUpValue>({
    username: "",
    password: "",
    repeatPassword: "",
    email: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUp({ ...signUpValue, [name]: value });
  };

  const handleSignUp = (): void => {
    // if (account) navigate("/todo");

    const data: RegistrationRequest = {
      name: signUpValue.username,
      email: signUpValue.email,
      password: signUpValue.password,
    };

    dispatch(registrationRequest(data));
  };
  const disabled =
    !signUpValue.email && !signUpValue.password && !signUpValue.repeatPassword;

  return (
    <ComponentSignUp
      errors={errors}
      isOpen={isOpen}
      onClose={onClose}
      disabled={disabled}
      signUpValue={signUpValue}
      handleChange={handleChange}
      handleSignUp={handleSignUp}
    />
  );
};

export default SignUp;
