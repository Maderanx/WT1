// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">TESLA</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link to="/vehicles" className="nav-link">Vehicles</Link></li>
            <li className="nav-item"><Link to="/energy" className="nav-link">Energy</Link></li>
            <li className="nav-item"><Link to="/charging" className="nav-link">Charging</Link></li>
            <li className="nav-item"><Link to="/discover" className="nav-link">Discover</Link></li>
            <li className="nav-item"><Link to="/shop" className="nav-link">Shop</Link></li>
            <li className="nav-item"><Link to="/robot" className="nav-link">We, Robot</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
