import React from "react";

export default interface ComponentProps
  extends React.HTMLProps<HTMLInputElement> {
  Button: JSX.Element;
  classes?: {
    input?: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
