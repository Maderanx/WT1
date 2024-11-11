import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Link to the homepage */}
      <Link to="/" className="logo">WordPress.com</Link>

      <nav className="nav">
        <a href="#products">Products</a>
        <a href="#features">Features</a>
        <a href="#resources">Resources</a>
        <a href="#pricing">Plans & Pricing</a>
      </nav>

      <div className="auth-buttons">
        {/* Link to the Login page */}
        <Link to="/login">
          <button className="login-button">Log in</button>
        </Link>
        <button className="get-started-button">Get started</button>
      </div>
    </header>
  );
};

export default Header;
