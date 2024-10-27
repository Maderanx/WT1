// src/pages/Home.js
import React from 'react';
import MainContent from '../components/MainContent';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <MainContent
        modelName="Model Y"
        apr="0%"
        leasePrice="$349"
        imageUrl="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-US-v2.png"
        extraInfo={[
          "The Model Y is an all-electric compact SUV with advanced autopilot capabilities and a long-range battery.",
          "It combines performance, safety, and utility for families and adventure lovers alike."
        ]}
      />
      <Footer />
    </>
  );
};

export default Home;
