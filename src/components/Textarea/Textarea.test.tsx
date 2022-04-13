/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { wrappedWithRouterAndReduxComponent } from "utils/wrapComponent";

import Textarea from "./index";
import userEvent from "@testing-library/user-event";

describe("Textarea", () => {
  test("call the callback every time input value is changed", () => {
    const handleChange = jest.fn();
    render(
      wrappedWithRouterAndReduxComponent(
        <Textarea
          Button={undefined}
          value=""
          placeholder=""
          handleChange={handleChange}
        />
      )
    );

    const input = screen.getByRole("textbox");
    userEvent.type(input, "React");

    expect(handleChange).toHaveBeenCalledTimes(5);
  });
});
