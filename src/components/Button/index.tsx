import React, { FC } from "react";
import Fab from "@mui/material/Fab";

import ComponentProps from "./types";
import "./style.css";

const Button: FC<ComponentProps> = ({
  Icon,
  classes,
  disabled,
  handleAddTodo,
  ...rest
}) => {
  return (
    <Fab
      className={classes}
      size={rest.size}
      color={rest.color}
      aria-label={rest["aria-label"]}
      onClick={handleAddTodo}
      disabled={disabled}
    >
      {Icon}
    </Fab>
  );
};

export default Button;