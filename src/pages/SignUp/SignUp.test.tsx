/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { wrappedWithRouterAndReduxComponent } from "utils/wrapComponent";

import SignUp from "./index";
import userEvent from "@testing-library/user-event";
import { waitForComponentToPaint } from "utils/waitFor";

describe("Sign up Button", () => {
  test("renders button", () => {
    render(wrappedWithRouterAndReduxComponent(<SignUp onSubmit={() => {}} />));
    const button = screen.getByRole("button", { name: /sign up/i });
    expect(button).toBeInTheDocument();
  });
});

describe("Sign up Inputs", () => {
  const handleSubmit = jest.fn();

  test("number of inputs", () => {
    render(
      wrappedWithRouterAndReduxComponent(<SignUp onSubmit={handleSubmit} />)
    );
    const email = screen.queryAllByPlaceholderText("Email");
    expect(email).toHaveLength(1);

    const password = screen.queryAllByPlaceholderText(/password/i);
    expect(password).toHaveLength(2);

    const username = screen.queryAllByPlaceholderText("Username");
    expect(username).toHaveLength(1);
  });

  test("input event", async () => {
    render(
      wrappedWithRouterAndReduxComponent(<SignUp onSubmit={handleSubmit} />)
    );
    waitForComponentToPaint(<SignUp onSubmit={handleSubmit} />);

    const email = screen.getByTestId("sign-up-email");
    expect(email).toContainHTML("");

    fireEvent.input(email, {
      target: { value: "test@mail.ru" },
    });

    expect(screen.getByTestId("sign-up-email")).toContainHTML("test@mail.ru");

    const password = screen.getByTestId("sign-up-password");
    expect(screen.getByTestId("sign-up-password")).toContainHTML("");
    userEvent.type(password, "11111111");
    expect(screen.getByTestId("sign-up-password")).toContainHTML("11111111");

    const repeatPassword = screen.getByTestId("sign-up-repeat-password");
    expect(repeatPassword).toContainHTML("");
    userEvent.type(repeatPassword, "11111111");
    expect(screen.getByTestId("sign-up-repeat-password")).toContainHTML(
      "11111111"
    );

    const username = screen.getByTestId("sign-up-username");
    userEvent.type(username, "Tonya");
    expect(screen.getByTestId("sign-up-username")).toContainHTML("Tonya");
  });
});

describe("Sign up Formik", () => {
  test("rendering and submitting a basic Formik form", async () => {
    const handleSubmit = jest.fn();
    render(
      wrappedWithRouterAndReduxComponent(<SignUp onSubmit={handleSubmit} />)
    );

    userEvent.type(screen.getByTestId(/username/i), "John");
    userEvent.type(screen.getByTestId(/email/i), "a@mail.ru");
    userEvent.type(screen.getByTestId("sign-up-password"), "11111111");

    userEvent.click(screen.getByRole("button", { name: "Sign up" }));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        name: "John",
        email: "a@mail.ru",
        password: "11111111",
      })
    );
  });
});
