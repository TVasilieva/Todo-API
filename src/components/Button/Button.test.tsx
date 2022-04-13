import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { wrappedWithRouterAndReduxComponent } from "utils/wrapComponent";

import Button from "./index";
import AppPage from "pages/AppPage";

describe("Button", () => {
  const addTodo = jest.fn();

  test("Check button disabled when initialized", () => {
    render(wrappedWithRouterAndReduxComponent(<AppPage />));

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  test("Will not call onClick when enabled", () => {
    render(
      wrappedWithRouterAndReduxComponent(
        <Button disabled={true} onClick={addTodo} />
      )
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(addTodo).not.toHaveBeenCalled();
  });

  test("Check button enabled when a valid input is entered", () => {
    render(wrappedWithRouterAndReduxComponent(<AppPage />));

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "React" } });
    expect(screen.getByRole("button")).toBeEnabled();
  });
});
