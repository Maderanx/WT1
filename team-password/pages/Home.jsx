// pages/Home.js
import React from 'react';
import CallToAction from '../components/CallToAction.jsx';
import ImageWithText from '../components/ImagewithText.jsx';
import './Home.css'; // Import the Home.css file

// Import images if they're stored in the src directory
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';

function Home() {
  const data = [
    { src: image1, text: 'Easy to Use,Easy to Love' },
    { src: image2, text: 'Ditch the spreadsheet' },
    { src: image3, text: 'Password Management for Teams of All Sizes' },
    // Add more images and descriptions as needed
  ];

  return (
    <div>
      <h2>Welcome to Team Password Management</h2>
      <p>Your solution for secure password storage.</p>
      <CallToAction />

      <div className="image-text-gallery">
        {data.map((item, index) => (
          <div key={index} className="image-text-block">
            {index % 2 === 0 ? (
              <ImageWithText src={item.src} text={item.text} />
            ) : (
              <>
                <p className="text">{item.text}</p>
                <img src={item.src} alt={item.text} className="image" />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
