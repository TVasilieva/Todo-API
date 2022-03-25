import React, { FC } from "react";
import Fab from "@mui/material/Fab";

import ComponentProps from "./types";
import "./style.scss";

const Button: FC<ComponentProps> = ({
  Icon,
  classes,
  disabled,
  onClick,
  ...rest
}) => {
  return (
    <Fab
      className={classes}
      size={rest.size}
      color={rest.color}
      aria-label={rest["aria-label"]}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon}
    </Fab>
  );
};

export default Button;
