// src/components/BackgroundVideo.js
import React from 'react';
import './BackgroundVideo.css';

function BackgroundVideo() {
  return (
    <div className="background-video">
      <video autoPlay loop muted>
        <source src="https://digitalassets-shop.tesla.com/video/upload/f_auto,q_auto/v1/content/dam/tesla/abF0uRhidP4hdUBc2Jmir_phone.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default BackgroundVideo;
