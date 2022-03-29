/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { wrappedWithRouterAndReduxComponent } from "utils/wrapComponent";

import SignIn from "./index";
import userEvent from "@testing-library/user-event";

describe("Sign in Button", () => {
  test("renders button", () => {
    render(wrappedWithRouterAndReduxComponent(<SignIn onSubmit={() => {}} />));
    const button = screen.getByRole("button", { name: /sign in/i });
    expect(button).toBeInTheDocument();
  });
});

describe("Sign in Inputs", () => {
  const handleSubmit = jest.fn();

  test("number of inputs", () => {
    render(
      wrappedWithRouterAndReduxComponent(<SignIn onSubmit={handleSubmit} />)
    );
    const email = screen.queryAllByPlaceholderText("Email");
    expect(email).toHaveLength(1);

    const password = screen.queryAllByPlaceholderText(/password/i);
    expect(password).toHaveLength(1);
  });

  test("input event", async () => {
    render(
      wrappedWithRouterAndReduxComponent(<SignIn onSubmit={handleSubmit} />)
    );

    const email = screen.getByTestId("sign-in-email");
    expect(email).toContainHTML("");

    fireEvent.input(email, {
      target: { value: "test@mail.ru" },
    });

    expect(await screen.findByTestId("sign-in-email")).toContainHTML(
      "test@mail.ru"
    );

    const password = screen.getByTestId("sign-in-password");
    expect(await screen.findByTestId("sign-in-password")).toContainHTML("");
    userEvent.type(password, "11111111");

    expect(await screen.findByTestId("sign-in-password")).toContainHTML(
      "11111111"
    );
  });
});

describe("Sign in Formik", () => {
  test("rendering and submitting a basic Formik form", async () => {
    const handleSubmit = jest.fn();
    render(
      wrappedWithRouterAndReduxComponent(<SignIn onSubmit={handleSubmit} />)
    );

    userEvent.type(screen.getByTestId(/email/i), "a@mail.ru");
    userEvent.type(screen.getByTestId(/password/i), "11111111");

    userEvent.click(screen.getByRole("button", { name: "Sign in" }));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        email: "a@mail.ru",
        password: "11111111",
      })
    );
  });
});
