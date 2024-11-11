// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png'; // Adjust path if necessary

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Café Coffee Day" className="logo-image" />
        </Link>
      </div>
      <nav className="nav">
        <Link to="/menu">Cafe Menu</Link>
        <Link to="/shop">E-shop</Link>
        <Link to="/order-online">Order Online</Link>
        <Link to="/locator">Café Finder</Link>
      </nav>
    </header>
  );
}

export default Header;
