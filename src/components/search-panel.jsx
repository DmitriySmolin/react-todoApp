import React from "react";
import "./search-panel.css";
const SearchPanel = () => {
  const searchText = "Search";
  const searchStyle = {
    fontSize: "20px"
  };
  return (
    <input
      className="search-input"
      placeholder={searchText}
      style={searchStyle}
    />
  );
};
export default SearchPanel;
