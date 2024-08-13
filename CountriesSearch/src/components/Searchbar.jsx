import React from "react";
import "./Searchbar.css";

const Searchbar = ({ placeholder, val, change }) => {
  return (
    <input
      type="text"
      onChange={change}
      value={val}
      className="search-bar"
      placeholder={placeholder}
    />
  );
};

export default Searchbar;
