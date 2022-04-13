/* eslint-disable testing-library/no-debugging-utils */
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { wrappedWithReduxComponent } from "utils/wrapComponent";

import AppPage from "pages/AppPage";
import App from "App";

describe("ReactDOM Render", () => {
  test("render main index.tsx", () => {
    render(
      wrappedWithReduxComponent(
        <MemoryRouter>
          <AppPage />
        </MemoryRouter>
      )
    );
  });
});

describe("App", () => {
  test("App renders one bg-image", () => {
    render(wrappedWithReduxComponent(<App />));

    const bgImage = screen.getByTestId("bg-image");
    expect(bgImage).toBeInTheDocument();

    const oneBgImage = screen.getAllByTestId("bg-image");
    expect(oneBgImage).toHaveLength(1);
  });
});

describe("Router tests", () => {
  test("Logout", async () => {
    render(
      wrappedWithReduxComponent(
        <MemoryRouter>
          <AppPage />
        </MemoryRouter>
      )
    );

    const image = screen.getByAltText("logo-img");
    fireEvent.click(image);

    const logout = screen.getByTestId("logout");
    fireEvent.click(logout);
    screen.debug();
    //expect(await screen.findByText(/todo app/i)).toBeInTheDocument(); // HOW TO TEST ROUTER
  });
});
