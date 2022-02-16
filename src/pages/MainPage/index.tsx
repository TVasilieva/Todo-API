import React from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="greeting">todo app</h2>
      <button
        className="login-btn"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
    </>
  );
}

export default MainPage;
