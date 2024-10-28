// src/components/SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Where" />
      <input type="date" placeholder="Check in" />
      <input type="date" placeholder="Check out" />
      <input type="text" placeholder="Who" />
      <button className="search-btn">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
