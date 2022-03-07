import { FC } from "react";
import classNames from "classnames";

import "./style.css";
import Props from "./types";

const Textarea: FC<Props> = ({
  Button,
  value,
  placeholder,
  handleChange,
  classes,
}) => {
  return (
    <div>
      <input
        className={classNames("textarea", classes?.input)}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {Button}
    </div>
  );
};

export default Textarea;
