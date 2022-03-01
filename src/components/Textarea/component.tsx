import { FC } from "react";
import classNames from "classnames";

import "./style.css";
import ComponentProps from "./types";

const ComponentTextarea: FC<ComponentProps> = ({
  Button,
  classes,
  handleChange,
  ...rest
}) => {
  return (
    <div>
      <input
        className={classNames("textarea", classes?.input)}
        placeholder={rest.placeholder}
        value={rest.value}
        onChange={handleChange}
      />
      {Button}
    </div>
  );
};

export default ComponentTextarea;
