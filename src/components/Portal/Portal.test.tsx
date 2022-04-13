/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { wrappedWithRouterAndReduxComponent } from "utils/wrapComponent";

import Portal from "./index";

describe("Portal", () => {
  test("Shows nothing if children is null", () => {
    render(wrappedWithRouterAndReduxComponent(<Portal children={null} />));

    const greeting = screen.queryByText("Hello world!");
    expect(greeting).not.toBeInTheDocument();
  });

  test("Data flows correctly", () => {
    render(
      wrappedWithRouterAndReduxComponent(
        <Portal>
          <div data-testid="test">
            <p>Hello, world!</p>
          </div>
        </Portal>
      )
    );
    const testid = screen.getByTestId("test");
    expect(testid).toBeInTheDocument();

    const greeting = screen.getByText("Hello, world!");
    expect(greeting).toBeInTheDocument();
  });
});
