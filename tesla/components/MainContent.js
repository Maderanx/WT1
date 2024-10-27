// src/components/MainContent.js
import React, { useState } from 'react';
import './MainContent.css';

const MainContent = ({ modelName, apr, leasePrice, imageUrl, extraInfo }) => { //Props
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo((prevShowInfo) => !prevShowInfo);
  };

  return (
    <section className="main-content">
      <h1>{modelName}</h1>
      <p>{apr} APR Available</p>
      <p>Lease Starting at {leasePrice}/mo</p>
      <img src={imageUrl} alt={modelName} className="car-image" />

      <button onClick={toggleInfo} className="learn-more-btn">
        {showInfo ? "Hide Details" : "Learn More"}
      </button>

      {showInfo && (
        <div className="extra-info">
          {extraInfo.map((info, index) => (
            <p key={index}>{info}</p>
          ))}
        </div>
      )}
    </section>
  );
};

export default MainContent;
