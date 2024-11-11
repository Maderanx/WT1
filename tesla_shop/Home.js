// src/components/Home.js
import React from 'react';
import Header from './Header';
import BackgroundVideo from './BackgroundVideo';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <BackgroundVideo />
      <div className="content">
        <img src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/cybergraffity_desktop.png"></img>
        <button className="shop-button">Shop Now</button>
      </div>
    </div>
  );
}

export default Home;
