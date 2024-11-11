import React from 'react';
import './InfoSection.css';

function InfoSection({ title, subtitle }) {
  return (
    <div className="info-section">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </div>
  );
}

export default InfoSection;
