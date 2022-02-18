import React, { FC } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import "./style.css";
import ComponentProps from "./types";

const InputForAdding: FC<ComponentProps> = () => {
  return (
    <div>
      <input className="inputForAdding" placeholder="Currently typing..." />
      <Fab className="addBtn" size="medium" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
};

export default InputForAdding;
