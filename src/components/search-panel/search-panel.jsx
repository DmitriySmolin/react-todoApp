import React, { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    term: ""
  };

  onSearchChange = e => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    const searchText = "Search";
    const searchStyle = {
      fontSize: "20px"
    };
    return (
      <input
        className="search-input"
        placeholder={searchText}
        style={searchStyle}
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}
