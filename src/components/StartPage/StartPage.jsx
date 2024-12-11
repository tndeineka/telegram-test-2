import React from "react";
import "./StartPage.css";
import logoImg from "../../assets/images/logo.webp";

export const StartPage = () => {
  return (
    <div className="container">
      <img src={logoImg} alt="logo" className="img" />
      <span className="text">Hey!</span>
      <p className="text">
        Welcome to the store. <br /> Here are rewards for you!
      </p>

      <button className="button">Start</button>
    </div>
  );
};

