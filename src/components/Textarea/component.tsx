import { FC } from "react";
import classNames from "classnames";

import "./style.css";
import ComponentProps from "./types";

const ComponentTextarea: FC<ComponentProps> = ({
  value,
  Icon,
  placeholder,
  classes,
  handleChange,
}) => {
  return (
    <div>
      <input
        className={classNames("textarea", classes?.input)}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {Icon}
    </div>
  );
};

export default ComponentTextarea;
