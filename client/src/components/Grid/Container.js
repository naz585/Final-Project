import React from "react";
const style = {
  paddingRight:"0",
  paddingLeft:"0"
}
export const Container = ({ fluid, children }) => (
  <div style = {style} className={`container${fluid ? "-fluid " : ""}`}>
    {children}
  </div>
);
