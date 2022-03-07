import * as Yup from "yup";

import { InitialValuesSignIn } from "pages/SignIn/types";
import { InitialValuesSignUp } from "pages/SignUp/types";

export const validateSignIn: Yup.SchemaOf<InitialValuesSignIn> = Yup.object({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export const validateSignUp: Yup.SchemaOf<InitialValuesSignUp> = Yup.object({
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
});
