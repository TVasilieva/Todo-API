import { Errors } from "pages/MainPage/types";

export default interface Props {
  isOpen: boolean;
  onClose: () => void;
  errors: Errors;
}

export default interface ComponentProps {
  isOpen: boolean;
  signInValue?: any;
  onClose: () => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSignIn?: () => void;
}

export type SignInValue = {
  email: string;
  password: string;
};
