import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/novlogo.svg'; // Adjust path if needed
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Noventiq Logo" className="logo" />
      <nav>
        <Link to="/">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/ecommerce">E-commerce</Link>
        <Link to="/investor-relations">Investor Relations</Link>
        <Link to="/news">News</Link>
        <Link to="/partners">Partners</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
