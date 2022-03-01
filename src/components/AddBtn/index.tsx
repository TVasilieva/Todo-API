import React, { FC } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import ComponentProps from "./types";
import "./style.css";

const AddBtn: FC<ComponentProps> = ({ disabled, handleAddTodo }) => {
  return (
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
  );
};

export default AddBtn;
