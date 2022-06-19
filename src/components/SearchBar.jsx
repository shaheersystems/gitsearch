import React from "react";

function SearchBar(props) {
  return (
    <div className="search-bar">
      <div className="logo">
        <span className="logo-text">GitSearch</span>
      </div>
      <form>
        <input
          type="text"
          placeholder="Enter a github username"
          onChange={props.handleSearchItem}
        />
      </form>
    </div>
  );
}

export default SearchBar;
