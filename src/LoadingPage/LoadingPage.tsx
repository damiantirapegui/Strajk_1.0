// import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./LoadingPage.css";

export const LoadingPage = () => {
  const navigate = useNavigate();

  const handleIcon = () => {
    navigate("/booking");
  };
  return (
    <div className="loading-body">
      <main className="logo-container" onClick={handleIcon}>
        <img src="./logo/logo.png" alt="logo-emblen" />
        <p className="brand-name">STRAJK</p>
      </main>
    </div>
  );
};
