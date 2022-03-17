import { LoginRequest, RegistrationRequest } from "api/types";
import { Account } from "models/user";
import { actionCreator } from "utils/actionCreator";

export enum UserActions {
  REGISTRATION_REQUEST = "REGISTRATION_REQUEST",
  REGISTRATION_RESPONSE = "REGISTRATION_RESPONSE",
  REGISTRATION_RESPONSE_ERROR = "REGISTRATION_RESPONSE_ERROR",

  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_RESPONSE = "LOGIN_RESPONSE",
  LOGIN_RESPONSE_ERROR = "LOGIN_RESPONSE_ERROR",

  LOGOUT_REQUEST = "LOGOUT_REQUEST",
  LOGOUT_RESPONSE = "LOGOUT_RESPONSE",
  LOGOUT_RESPONSE_ERROR = "LOGOUT_RESPONSE_ERROR",

  GET_USER_REQUEST = "GET_USER_REQUEST",
  GET_USER_RESPONSE = "GET_USER_RESPONSE",
  GET_USER_RESPONSE_ERROR = "GET_USER_RESPONSE_ERROR",
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

export const logoutRequest = () =>
  actionCreator<UserActions>(UserActions.LOGOUT_REQUEST);
export const logoutResponse = () =>
  actionCreator<UserActions>(UserActions.LOGOUT_RESPONSE);
export const logoutResponseError = (error: any) =>
  actionCreator<UserActions, any>(UserActions.LOGOUT_RESPONSE_ERROR, error);

export const getUserRequest = () =>
  actionCreator<UserActions>(UserActions.GET_USER_REQUEST);
export const getUserResponse = (data: string) =>
  actionCreator<UserActions, string>(UserActions.GET_USER_RESPONSE, data);
export const getUserResponseError = (error: any) =>
  actionCreator<UserActions, any>(UserActions.GET_USER_RESPONSE_ERROR, error);
