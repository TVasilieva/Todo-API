import { Errors } from "pages/MainPage/types";

export default interface ComponentProps {
  errors: Errors;
  disabled?: boolean;
  isOpen?: boolean;
  signUpValue?: any;
  onClose?: () => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSignUp?: () => void;
}

export type SignUpValue = {
  email: string;
  password: string;
  repeatPassword: string;
  username: string;
};
