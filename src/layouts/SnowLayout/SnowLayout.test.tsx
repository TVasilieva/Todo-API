/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { wrappedWithRouterAndReduxComponent } from "utils/wrapComponent";

import Layout from "./index";
import AppPage from "pages/AppPage";

describe("Layout", () => {
  test("200 snowflakes", () => {
    render(
      wrappedWithRouterAndReduxComponent(<Layout children={<AppPage />} />)
    );
    const snowflakes = screen.getAllByTestId("snow");
    expect(snowflakes).toHaveLength(200);
  });
});
