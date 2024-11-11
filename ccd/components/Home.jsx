// src/components/Home.jsx
import React from 'react';
import Banner from './Banner';
import ServiceCard from './ServiceCard';
import Slideshow from './Slideshow';

function Home() {
  return (
    <div className="home">
      <Slideshow /> {/* Add slideshow here */}
      <Banner />
      <div className="services">
        <ServiceCard title="Cafe Menu" link="/menu" />
        <ServiceCard title="E-shop" link="/shop" />
        <ServiceCard title="Order Online" link="/order-online" />
        <ServiceCard title="Café Finder" link="/locator" />
      </div>
    </div>
  );
}

export default Home;
