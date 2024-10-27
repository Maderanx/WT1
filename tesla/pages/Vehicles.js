// src/pages/Vehicles.js
import React from 'react';
import MainContent from '../components/MainContent';

const Vehicles = () => {
  return (
    <MainContent
      modelName="Model S"
      apr="1.5%"
      leasePrice="$749"
      imageUrl="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Desktop.jpg"
      extraInfo={[
        "The Model S is designed for electric-powered performance, with all-wheel drive and powerful acceleration.",
        "It provides a luxurious, high-tech experience with advanced self-driving capabilities."
      ]}
    />
  );
};

export default Vehicles;
