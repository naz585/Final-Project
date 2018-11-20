import React from "react";
import "./Table.css";


 

 const table = ({ children }) => (
  <table className="table-scraper">
    {children}
  </table>

);

export default table;