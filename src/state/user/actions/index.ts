import { RegistrationRequest } from "api/auth";
import { Account, User } from "models/user";
import { actionCreator } from "utils/actionCreator";

export enum UserActions {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",

  REGISTRATION_REQUEST = "REGISTRATION_REQUEST",
  REGISTRATION_RESPONSE = "REGISTRATION_RESPONSE",
  REGISTRATION_RESPONSE_ERROR = "REGISTRATION_RESPONSE_ERROR",
}

export const setAccount = (account: User) =>
  actionCreator<UserActions, User>(UserActions.LOGIN, account);

export const Logout = () => actionCreator<UserActions>(UserActions.LOGOUT);

export const registrationRequest = (data: RegistrationRequest) =>
  actionCreator<UserActions, RegistrationRequest>(
    UserActions.REGISTRATION_REQUEST,
    data
  );
export const registrationResponse = (data: Account) =>
  actionCreator<UserActions, Account>(UserActions.REGISTRATION_RESPONSE, data);
export const registrationResponseError = (error: any) =>
  actionCreator<UserActions, any>(
    UserActions.REGISTRATION_RESPONSE_ERROR,
    error
  );
