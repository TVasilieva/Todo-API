import { FC } from "react";
import ComponentProps from "./types";
import "./style.css";
import AppModal from "components/Modal";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";

const ComponentMainPage: FC<ComponentProps> = ({
  account,
  isLoading,
  isInOpen,
  isUpOpen,
  toggleInModal,
  toggleUpModal,
  errors,
}) => {
  return (
    <div className="main-page">
      <div className="greeting">todo app</div>
      {!account && (
        <div className="login-btn">
          <button className="login-btn__btn" onClick={toggleInModal}>
            Sign In
          </button>
          <button className="login-btn__btn" onClick={toggleUpModal}>
            Sign Up
          </button>
        </div>
      )}
      {!!isInOpen && !isUpOpen ? (
        <AppModal
          isOpen={isInOpen}
          onClose={toggleInModal}
          isLoading={isLoading}
        >
          <SignIn isOpen={isInOpen} onClose={toggleInModal} errors={errors} />
        </AppModal>
      ) : (
        <AppModal
          isOpen={isUpOpen}
          onClose={toggleUpModal}
          isLoading={isLoading}
        >
          <SignUp isOpen={isUpOpen} onClose={toggleUpModal} errors={errors} />
        </AppModal>
      )}
    </div>
  );
};

export default ComponentMainPage;
