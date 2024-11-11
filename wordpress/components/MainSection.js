import React from 'react';
import './MainSection.css';
import mainImage from './assets/image.png'; // Update with the correct image path

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="content">
        <h1>WordPress Without Limits</h1>
        <p>Everything you need to build and grow any website—all in one place.</p>
        <button className="get-started-button">Get started</button>
      </div>
      <div className="image-container">
        <img src={mainImage} alt="Main section graphic" />
      </div>
    </section>
  );
};

export default MainSection;
