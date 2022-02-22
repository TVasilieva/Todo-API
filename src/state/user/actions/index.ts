import { LoginRequest, RegistrationRequest } from "api/auth";
import { Account } from "models/user";
import { actionCreator } from "utils/actionCreator";

export enum UserActions {
  LOGOUT = "LOGOUT",

  REGISTRATION_REQUEST = "REGISTRATION_REQUEST",
  REGISTRATION_RESPONSE = "REGISTRATION_RESPONSE",
  REGISTRATION_RESPONSE_ERROR = "REGISTRATION_RESPONSE_ERROR",

  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_RESPONSE = "LOGIN_RESPONSE",
  LOGIN_RESPONSE_ERROR = "LOGIN_RESPONSE_ERROR",
}

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

export const loginRequest = (data: LoginRequest) =>
  actionCreator<UserActions, LoginRequest>(UserActions.LOGIN_REQUEST, data);
export const loginResponse = (data: Account) =>
  actionCreator<UserActions, Account>(UserActions.LOGIN_RESPONSE, data);
export const loginResponseError = (error: any) =>
  actionCreator<UserActions, any>(UserActions.LOGIN_RESPONSE_ERROR, error);

export const logout = () => actionCreator<UserActions>(UserActions.LOGOUT);
