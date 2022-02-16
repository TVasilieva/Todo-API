import { FC } from "react";
import { createPortal } from "react-dom";
import ComponentProps from "./types";

const Portal: FC<ComponentProps> = ({ children }) => {
  const el: any = document.getElementById("portal-root");
  return createPortal(children, el);
};
export default Portal;
