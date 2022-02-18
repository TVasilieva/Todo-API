export default interface ComponentProps {
  closeLoginModal: () => void;
  loginHeader: JSX.Element[];
  signInGroup: JSX.Element[];
  signUpGroup: JSX.Element[];
  signBtns: JSX.Element[];
}

export type LoginHeader = {
  id: string;
  className: string;
  name: string;
  checked: boolean;
};

export type SignUp = {
  htmlFor: string;
  name: string;
  type: string;
  "data-type"?: string;
  value: string;
};

export type SignIn = {
  htmlFor: string;
  name: string;
  type: string;
  "data-type"?: string;
  value: string;
};

export type SignInInputs = {
  usernameIn: string;
  passwordIn: string;
};

export type SignUpInputs = {
  username: string;
  password: string;
  repeatPassword: string;
  email: string;
};

export type SignBtn = {
  name: string;
  onClick: () => void;
};
