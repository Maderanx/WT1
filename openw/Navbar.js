// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" alt="OpenWeather" />
      </Link>
      
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Weather in your city"
        />
      </div>

      <div className="nav-links">
        <Link to="/guide" className="nav-link">Guide</Link>
        <Link to="/api" className="nav-link">API</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/marketplace" className="nav-link">Marketplace</Link>
        <Link to="/pricing" className="nav-link">Pricing</Link>
        <Link to="/maps" className="nav-link">Maps</Link>
        <Link to="/our-initiatives" className="nav-link">Our Initiatives</Link>
        <Link to="/partners" className="nav-link">Partners</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="/business" className="nav-button">For Business</Link>
        <Link to="/signin" className="nav-link">Sign in</Link>
        <Link to="/support" className="nav-link">Support</Link>
      </div>
    </nav>
  );
};

export default Navbar;