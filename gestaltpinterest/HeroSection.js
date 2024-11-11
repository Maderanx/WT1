// HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const HeroSection = ({ isDarkMode }) => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Gestalt is Pinterest's design system
        </h1>
        <p className="hero-description">
          We're here to help you build experiences that inspire people to create the life they love
        </p>
        <Link to="/whats-new" className="hero-button">
          See what's new
        </Link>
      </div>
      <div className="hero-images">
        <div className="image-grid">
          <div className="grid-item">
            <div className="image-card" style={{ 
              backgroundColor: isDarkMode ? '#1d4ed8' : '#3b82f6', 
              padding: '16px', 
              color: 'white' 
            }}>
              ⭐
            </div>
            <div className="image-card">
              <img 
                src="data:image/jpeg;base64,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"
                alt="Colorful popsicle"
              />
            </div>
          </div>
          <div className="grid-item">
            <div className="image-card">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQONSTe8YFo8NAXX3BcAEmJbCmLj1R6bDPKVw&s"
                alt="Abstract design"
              />
            </div>
            <div className="image-card">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QCZv4KZqZsZ0YxbprvxEklJgriTciPYlvg&s"
                alt="Person with heart glasses"
              />
            </div>
          </div>
        </div>
        <div className="check-icon" style={{
          backgroundColor: isDarkMode ? '#1d4ed8' : '#3b82f6'
        }}>✓</div>
      </div>
    </div>
  );
};

export default HeroSection;