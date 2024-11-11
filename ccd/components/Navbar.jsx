// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/menu">Cafe Menu</Link>
      <Link to="/shop">E-shop</Link>
      <Link to="/order-online">Order Online</Link>
      <Link to="/locator">Café Finder</Link>
    </nav>
  );
}

export default Navbar;
