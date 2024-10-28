// src/components/ImageWithText.js
import React from 'react';
import './ImageWithText.css'; // Optional: create a CSS file for styles

const ImageWithText = ({ src, text }) => (
  <div className="image-text-container">
    <img src={src} alt={text} className="image" />
    <p className="text">{text}</p>
  </div>
);

export default ImageWithText;
    