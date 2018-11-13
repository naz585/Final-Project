import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <div className="jumbotron mt-5">
    {children}
  </div>
);

export default Jumbotron;
