import { FC } from "react";
import Modal from "@mui/material/Modal";
import Grow from "@mui/material/Grow";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import ComponentProps from "./types";

import "./style.css";
import { useAppSelector } from "state";
import { getIsLoading } from "state/user/selectors";
import Loader from "components/Loader";

const AppModal: FC<ComponentProps> = ({ children, isOpen, onClose }) => {
  const isLoading = useAppSelector(getIsLoading);

  return isLoading ? (
    <Loader />
  ) : (
    <Modal open={isOpen} onClose={onClose} className="overlay">
      <Grow in={isOpen}>
        <Box className="modal">
          <CloseIcon
            fontSize="large"
            color="info"
            className="close"
            onClick={onClose}
          />

          {children}
        </Box>
      </Grow>
    </Modal>
  );
};

export default AppModal;
