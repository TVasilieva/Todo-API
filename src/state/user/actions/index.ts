import { User } from "models/user";
import { actionCreator } from "utils/actionCreator";

export enum UserActions {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

export const setAccount = (account: User) =>
  actionCreator<UserActions, User>(UserActions.LOGIN, account);

export const Logout = () => actionCreator<UserActions>(UserActions.LOGOUT);
