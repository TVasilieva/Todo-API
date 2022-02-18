import React, { FC } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import "./style.css";
import ComponentProps from "./types";

const ComponentInputForAdding: FC<ComponentProps> = ({
  value,
  disabled,
  handleAddTodo,
  handleChange,
}) => {
  return (
    <div>
      <input
        className="inputForAdding"
        placeholder="Currently typing..."
        value={value}
        onChange={handleChange}
      />
      <Fab
        className="addBtn"
        size="medium"
        color="secondary"
        aria-label="add"
        onClick={handleAddTodo}
        disabled={disabled}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default ComponentInputForAdding;
