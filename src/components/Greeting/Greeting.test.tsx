/* eslint-disable testing-library/await-async-utils */
/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { wrappedWithRouterAndReduxComponent } from "utils/wrapComponent";

import Greeting from "components/Greeting";

describe("Username", () => {
  const username = "Eric Cartman";

  test("displays correct greeting", async () => {
    render(
      wrappedWithRouterAndReduxComponent(<Greeting username={username} />)
    );

    await screen.findByText(/welcome/i);
  });

  test("renders greeting correctly", async () => {
    render(
      wrappedWithRouterAndReduxComponent(<Greeting username={username} />)
    );
    expect(screen.queryByText("go away")).not.toBeInTheDocument();
  });
});
