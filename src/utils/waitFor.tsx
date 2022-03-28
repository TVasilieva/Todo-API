import { ReactNode } from "react";
import { act } from "react-dom/test-utils";

export const waitForComponentToPaint = async (wrapper: ReactNode) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    (wrapper as any).update();
  });
};
