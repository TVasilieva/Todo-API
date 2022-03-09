import { FC } from "react";
import "./style.scss";

import { CircularProgress } from "@mui/material";
import Portal from "components/Portal";

const Loader: FC = () => {
  return (
    <Portal>
      <div className="overlay">
        <div className="progress">
          <CircularProgress />
        </div>
      </div>
    </Portal>
  );
};

export default Loader;
