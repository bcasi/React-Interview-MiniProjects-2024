import React from "react";
import "./Button.css";

const Button = ({ children, onClick, val }) => {
  return (
    <button onClick={() => onClick(val)} className="button-ele">
      {children}
    </button>
  );
};

export default Button;
