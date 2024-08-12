import React from "react";
import "./SearchBar.css";

const SearchBar = ({ search, handleSearch, onSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city name"
        value={search}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
