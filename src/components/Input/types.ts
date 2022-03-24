import { ChangeEventHandler, KeyboardEventHandler } from "react";

export default interface ComponentProps {
  name: string;
  handleKeyDown: KeyboardEventHandler<HTMLInputElement>;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
}
