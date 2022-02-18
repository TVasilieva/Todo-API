import { FC, ReactNode, ReactPortal } from "react";
import { createPortal } from "react-dom";

const usePortal: FC<UsePortal> = ({ children, target }): ReactPortal => {
  return createPortal(children, target);
};

export type UsePortal = {
  children: ReactNode;
  target: HTMLElement;
};

export default usePortal;
