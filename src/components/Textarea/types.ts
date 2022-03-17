import React from "react";

export default interface Props extends React.HTMLProps<HTMLInputElement> {
  Button: JSX.Element;
  value: string;
  placeholder: string;
  classes?: {
    input?: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
