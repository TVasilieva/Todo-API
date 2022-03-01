import React, { FC } from "react";
import { ComponentProps } from "./types";
import "./style.css";

import { CircularProgress } from "@mui/material";

const ProgressBar: FC<ComponentProps> = () => {
  return (
    <div className="progress">
      <CircularProgress />
    </div>
  );
};

export default ProgressBar;
