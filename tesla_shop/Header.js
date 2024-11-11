// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">TESLA</div>
      <nav>
        <ul>
          <li>Shop</li>
          <li>Charging</li>
          <li>Vehicle Accessories</li>
          <li>Apparel</li>
          <li>Lifestyle</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
