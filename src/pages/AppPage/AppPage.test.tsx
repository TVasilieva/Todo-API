/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { wrappedWithRouterAndReduxComponent } from "utils/wrapComponent";

import AppPage from "./index";
import axios from "axios";

jest.mock("axios");

const username: string = "Vendi Testaburger";

describe("Username", () => {
  test("renders greeting", async () => {
    (axios as any).get.mockReturnValue(username);

    render(wrappedWithRouterAndReduxComponent(<AppPage />));
    // const authorizedUser = await screen.findByText("Vendi");

    // expect(axios.get).toBeCalledTimes(1);
    // expect(authorizedUser).toEqual(1);

    // axios.get.mockImplementationOnce(() => Promise.resolve({ data: user }));

    // const greeting = await screen.findByRole("h2");
    // expect(greeting).toBeInTheDocument();
    // expect(greeting).toHaveBeenCalledTimes(1);
    // expect(greeting).toHaveBeenCalledWith(
    //   "https://api-nodejs-todolist.herokuapp.com/user/me"
    // );

    //screen.debug();
  });

  test("renders greeting correctly", async () => {
    render(wrappedWithRouterAndReduxComponent(<AppPage />));
    await waitFor(() => {
      expect(screen.queryByText("go away")).not.toBeInTheDocument();
    });
  });
});

describe("Filter", () => {
  const todos: any = [
    { description: "Tonya", completed: true },
    { description: "Enot", completed: false },
    { description: "Antoniy", completed: true },
  ];
  test("change filter to active", () => {
    render(wrappedWithRouterAndReduxComponent(<AppPage />));
    const span = screen.getByText(/active/i);
    fireEvent.click(span);
    expect(todos).toEqual([{ description: "Enot", completed: false }]);
  });
});
