import React from 'react';
import './Home.css';
import novDescImage from '../assets/nov_desc.jpg'; // Import the image

function Home() {
  return (
    <div className="page-container">
      <div className="hero-section">
        <img src={novDescImage} alt="Noventiq Description" className="hero-image" />
      </div>
      <div className="description">
        <h1>NOV</h1>
        <p>'novus' - new + innovation</p>
        <h1>EN</h1>
        <p>Entrepreneurial + energy</p>
        <h1>T</h1>
        <p>Technology + transformation</p>
        <h1>IQ</h1>
        <p>Intelligence + quality</p>
      </div>
    </div>
  );
}

export default Home;
