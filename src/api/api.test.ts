import "@testing-library/jest-dom/extend-expect";
import { getToken } from "utils/token";

describe("Todo API", () => {
  test("token", () => {
    const token = getToken() as string;
    expect(token).toBeNull();
  });
});
