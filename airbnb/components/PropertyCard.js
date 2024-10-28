// src/components/PropertyCard.js
import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ imageUrl, label, title }) => {
  return (
    <div className="property-card">
      <img src={imageUrl} alt={title} className="property-image" />
      <div className="property-info">
        <span className="property-label">{label}</span>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default PropertyCard;
