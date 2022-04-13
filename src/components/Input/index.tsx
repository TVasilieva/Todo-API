import { FC } from "react";
import ComponentProps from "./types";

const Input: FC<ComponentProps> = ({ name, handleKeyDown, onInputChange }) => {
  return (
    <input
      className="profile__input"
      placeholder="type your name..."
      type="text"
      name="name"
      value={name}
      onChange={onInputChange}
      required
      maxLength={25}
      onKeyDown={handleKeyDown}
      data-testid="test-input"
    />
  );
};

export default Input;
