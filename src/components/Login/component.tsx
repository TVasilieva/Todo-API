import React, { FC } from "react";

import CloseIcon from "@mui/icons-material/Close";

import "./style.css";
import ComponentProps from "./types";

const ComponentLogin: FC<ComponentProps> = ({
  loginHeader,
  closeLoginModal,
  signInGroup,
  signUpGroup,
  signBtns,
}) => {
  return (
    <div className="login-wrap">
      <div className="login-html">
        <div className="close-login" onClick={closeLoginModal}>
          <CloseIcon fontSize="large" color="info" />
        </div>
        {loginHeader}
        <div className="login-form">
          <div className="sign-in-htm">
            {signInGroup}
            <div className="group">
              <input id="check" type="checkbox" className="check" />
              <label htmlFor="check">
                <span className="icon"></span> Keep me Signed in
              </label>
            </div>
            {signBtns[0]}
          </div>
          <div className="sign-up-htm">
            {signUpGroup}
            {signBtns[1]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentLogin;
