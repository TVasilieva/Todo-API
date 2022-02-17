import { User } from "user";

export default interface ComponentProps extends DispatchProps, StateProps {
  onClose?: () => void;
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

export interface StateProps {
  user: User | null;
}

export interface DispatchProps {
  setUser: (user: User) => void;
}
