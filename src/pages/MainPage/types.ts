import { Account } from "models/user";

export default interface ComponentProps {
  account: Account | null;
  toggleInModal: () => void;
  toggleUpModal: () => void;
  isInOpen: boolean;
  isUpOpen: boolean;
  isLoading: boolean;
}

export type Errors = {
  accountExcists: string;
  notEqualPasswords: string;
  wrongEmailOrPassword: string;
  notValidEmail: string;
  notValidPassword: string;
};
