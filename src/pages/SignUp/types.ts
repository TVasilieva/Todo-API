import { RegistrationRequest } from "api/types";

export interface InitialValuesSignUp {
  name: string;
  password: string;
  repeatPassword?: string;
  email: string;
}

export interface ComponentProps {
  onSubmit: ({ email, password, name }: RegistrationRequest) => void;
}
