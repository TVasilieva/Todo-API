import { FC, ReactPortal } from "react";
import { createPortal } from "react-dom";
import { ComponentProps } from "./types";

const Portal: FC<ComponentProps> = ({ children }): ReactPortal => {
  const target = document.getElementById("portal-root");
  return createPortal(children, target as HTMLElement);
};

export default Portal;
