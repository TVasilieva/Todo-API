import { LocalStorage } from "constants/localStorage";

export const createToken = (token: string) => {
  return `Bearer ${token}`;
};

export const setToken = (token: string) => {
  localStorage.setItem(LocalStorage.Token, token);
};

export const getToken = (): string | null => {
  return localStorage.getItem(LocalStorage.Token);
};

export const removeToken = () => {
  localStorage.removeItem(LocalStorage.Token);
};
