import "@testing-library/jest-dom/extend-expect";
import { LocalStorage } from "constants/localStorage";
import { createToken, setToken, getToken, removeToken } from "./token";

const localStorageMock = (() => {
  return {
    getToken,
    setToken,
    removeToken,
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

const token: string = "123456789";

describe("Token function", () => {
  test("create", () => {
    expect(createToken(token)).toBe("Bearer 123456789");
  });

  test("set", () => {
    setToken(token);
    const tokenLS = localStorage.getItem(LocalStorage.Token);
    expect(tokenLS).toBe("Bearer 123456789");
  });
});
