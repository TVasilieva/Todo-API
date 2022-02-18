import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import ComponentProps, { StateProps } from "./types";
import "./style.css";

import { connect } from "react-redux";

const MainPage: FC<ComponentProps> = ({ user }) => {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="greeting">todo app</h2>
      {!user && (
        <button
          className="login-btn"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      )}
    </>
  );
};

const mapStateToProps = (state: any): StateProps => ({
  user: state.user.user,
});

export default connect<StateProps>(mapStateToProps)(MainPage);
