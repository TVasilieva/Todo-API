import { LoginRequest } from "api/types";

export interface InitialValuesSignIn {
  email: string;
  password: string;
}

export interface ComponentProps {
  onSubmit: ({ email, password }: LoginRequest) => void;
}
