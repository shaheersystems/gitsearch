import React from "react";

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="logo">
        <span className="logo-text">GitSearch</span>
      </div>
      <form>
        <input type="text" placeholder="Enter a github username" />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
