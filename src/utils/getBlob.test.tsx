import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { wrappedWithRouterAndReduxComponent } from "utils/wrapComponent";

import Header from "components/Header";
import getBlob from "./getBlob";

describe("GetBlob function", () => {
  test("works correctly", () => {});
  render(wrappedWithRouterAndReduxComponent(<Header />));

  const url = "https://citaty.info/files/characters/633.jpg";
  getBlob(url);
  const image = screen.getByRole("img");
  expect(image).toHaveAttribute(
    "src",
    "./assets/icon.png" //????????????????
  );
});
