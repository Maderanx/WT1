// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png" alt="Airbnb Logo" className="navbar-logo" />
      <ul className="navbar-links">
        <li>Stays</li>
        <li>Experiences</li>
        <li>Airbnb your home</li>
      </ul>
      <div className="navbar-user">
        <i className="fa fa-user-circle"></i>
      </div>
    </nav>
  );
};

export default Navbar;
