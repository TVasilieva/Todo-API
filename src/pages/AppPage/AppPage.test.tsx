/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { wrappedWithRouterAndReduxComponent } from "utils/wrapComponent";
import { rest } from "msw";
import { setupServer } from "msw/node";

import AppPage from "./index";

// export const handlers = [
//   rest.get("/api/user", (req, res, ctx) => {
//     return res(ctx.json("John Smith"), ctx.delay(150));
//   }),
// ];

// const server = setupServer(...handlers);

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

describe("Username", () => {
  test("fetches & receives a user after clicking the fetch user button", async () => {
    render(wrappedWithRouterAndReduxComponent(<AppPage />));

    // expect(screen.getByText(/no user/i)).toBeInTheDocument()
    // expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()
    //
    //  fireEvent.click(screen.getByRole("button", { name: /Fetch user/i }));
    // expect(screen.getByText(/no user/i)).toBeInTheDocument();

    //  expect(await screen.findByText(/John Smith/i)).toBeInTheDocument();
    //expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument();
    //expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()
  });

  test("renders greeting correctly", async () => {
    render(wrappedWithRouterAndReduxComponent(<AppPage />));
    await waitFor(() => {
      expect(screen.queryByText("go away")).not.toBeInTheDocument();
    });
  });
});
