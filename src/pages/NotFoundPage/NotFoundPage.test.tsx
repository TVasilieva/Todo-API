/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";
import { wrappedWithRouterAndReduxComponent } from "utils/wrapComponent";

import NotFoundPage from "./index";
import userEvent from "@testing-library/user-event";

describe("Not Found Page", () => {
  test("Text '404 not found excists'", () => {
    render(wrappedWithRouterAndReduxComponent(<NotFoundPage />));
    const text = screen.getByText("404 not found");
    expect(text).toBeInTheDocument();
  });

  test("Navigate to main page", () => {
    const history = createMemoryHistory();
    render(wrappedWithRouterAndReduxComponent(<NotFoundPage />));

    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(history.location.pathname).toEqual("/");
  });
});
