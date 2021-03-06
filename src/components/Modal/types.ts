import { ReactNode } from "react";

export default interface ComponentProps {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
}
