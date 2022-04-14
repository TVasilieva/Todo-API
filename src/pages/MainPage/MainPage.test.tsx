/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import { wrappedWithRouterAndReduxComponent } from "utils/wrapComponent";

import MainPage from "./index";

describe("Sign In button", () => {
  test("excists", () => {
    render(wrappedWithRouterAndReduxComponent(<MainPage />));
    const button = screen.getByRole("button", { name: /sign in/i });
    expect(button).toBeInTheDocument();
  });

  test("one Sign in button", () => {
    render(wrappedWithRouterAndReduxComponent(<MainPage />));
    const buttons = screen.getAllByRole("button", { name: /sign in/i });
    expect(buttons).toHaveLength(1);
  });

  test("opens modal", () => {
    render(wrappedWithRouterAndReduxComponent(<MainPage />));
    const button = screen.getByRole("button", { name: /sign in/i });
    expect(screen.queryByTestId("sign-in")).toBeNull();
    fireEvent.click(button);
    expect(screen.getByTestId("sign-in")).toBeInTheDocument();
  });
});

describe("Sign Up button", () => {
  test("excists", () => {
    render(wrappedWithRouterAndReduxComponent(<MainPage />));
    const button = screen.getByRole("button", { name: /sign up/i });
    expect(button).toBeInTheDocument();
  });

  test("one Sign up button", () => {
    render(wrappedWithRouterAndReduxComponent(<MainPage />));
    const buttons = screen.getAllByRole("button", { name: /sign up/i });
    expect(buttons).toHaveLength(1);
  });

  test("opens modal", () => {
    render(wrappedWithRouterAndReduxComponent(<MainPage />));
    const button = screen.getByRole("button", { name: /sign up/i });
    expect(screen.queryByTestId("sign-up")).toBeNull();
    fireEvent.click(button);
    expect(screen.getByTestId("sign-up")).toBeInTheDocument();
  });
});

describe("Navigation", () => {
  test("navigate to todo", () => {
    const history = createMemoryHistory();

    render(wrappedWithRouterAndReduxComponent(<MainPage />));

    expect(history.location.pathname).toEqual("/");
  });
});
