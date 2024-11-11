// SearchSection.js
import React, { useState } from 'react';
import './App.css';

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="search-section">
      <form onSubmit={handleSearch} className="main-search">
        <input
          type="text"
          className="search-input"
          placeholder="Search city"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
        <button type="button" className="location-button">
          📍
        </button>
      </form>
      <button className="location-button">
        Different Weather?
      </button>
    </div>
  );
};

export default SearchSection;