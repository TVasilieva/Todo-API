import React, { FC } from "react";
import ComponentProps from "./types";

import "./style.css";

const InputForAdding: FC<ComponentProps> = () => {
  return <input className="inputForAdding" placeholder="Currently typing..." />;
};

export default InputForAdding;
