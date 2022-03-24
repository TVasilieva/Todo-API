/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { wrappedWithRouterAndReduxComponent } from "utils/wrapComponent";

import Header from "./index";
import AppPage from "pages/AppPage";

import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";

describe("Header", () => {
  test("image opens dropdown-menu", () => {
    render(wrappedWithRouterAndReduxComponent(<Header />));

    const image = screen.getByAltText("logo-img");
    fireEvent.click(image);
    expect(screen.getByTestId("dropdown-menu")).toBeInTheDocument();

    fireEvent.click(image);
    expect(screen.queryByTestId("dropdown-menu")).toBeNull();
  });

  test("logout click", async () => {
    const history = createMemoryHistory();
    render(wrappedWithRouterAndReduxComponent(<AppPage />));

    const image = screen.getByAltText("logo-img");
    fireEvent.click(image);

    const logout = screen.getByTestId("logout");
    userEvent.click(logout);
    expect(history.location.pathname).toEqual("/");
  });

  test("logo color", () => {
    render(wrappedWithRouterAndReduxComponent(<Header />));

    const logo = screen.getByTestId("logo");
    expect(logo).toHaveStyle({ color: "rgb(255, 255, 255)" });
  });
});
