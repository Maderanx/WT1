// src/components/ServiceCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

function ServiceCard({ title, link }) {
  return (
    <Link to={link} className="service-card">
      <div className="service-title">{title}</div>
    </Link>
  );
}

export default ServiceCard;
