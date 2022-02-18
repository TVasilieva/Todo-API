import React, { FC } from "react";

import "./style.css";
import ComponentProps from "./types";

import IconButton from "@mui/material/IconButton";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const TodoItem: FC<ComponentProps> = ({ data }) => {
  return (
    <>
      <div className="round">
        <input type="checkbox" id={data} name={data} />
        <label htmlFor={data}>{data}</label>
        <IconButton aria-label="delete" size="large">
          <DeleteOutlineIcon />
        </IconButton>
      </div>
    </>
  );
};

export default TodoItem;
