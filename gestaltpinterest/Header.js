// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          </svg>
        </div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Get started</Link>
          <Link to="/foundations" className="nav-link">Foundations</Link>
          <Link to="/components" className="nav-link">Components</Link>
          <Link to="/team-support" className="nav-link">Team support</Link>
          <Link to="/whats-new" className="nav-link">What's new</Link>
        </nav>
      </div>
      <div className="header-buttons">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="icon-button"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        <button className="icon-button" aria-label="Search">
          🔍
        </button>
      </div>
    </header>
  );
};

export default Header;