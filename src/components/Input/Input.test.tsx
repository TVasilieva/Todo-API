import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { wrappedWithRouterAndReduxComponent } from "utils/wrapComponent";

import Input from "./index";

describe("Input", () => {
  const handleKeyDown = jest.fn();

  test("Added new name by clicking Enter", () => {
    render(
      wrappedWithRouterAndReduxComponent(
        <Input
          name={"Eric"}
          handleKeyDown={handleKeyDown}
          onInputChange={() => {}}
        />
      )
    );

    const input = screen.getByTestId("test-input");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });
    expect(handleKeyDown).toBeCalledTimes(1);
  });
});
