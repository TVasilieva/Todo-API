import { User } from "user";

export const LOGIN = "LOGIN";

export const setUser = (user: User) => ({
  type: LOGIN,
  payload: user,
});
