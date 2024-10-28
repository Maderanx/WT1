// src/pages/Home.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import CategoryTabs from '../components/CategoryTabs';
import PropertyCard from '../components/PropertyCard';
import Footer from '../components/Footer';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Icons");

  return (
    <div>
      <Navbar />
      <SearchBar />
      <CategoryTabs onSelectCategory={setSelectedCategory} />
      <div className="property-grid">
        <PropertyCard
          imageUrl="https://example.com/image1.jpg"
          label="Live"
          title="Beautiful Castle in the Countryside"
        />
        <PropertyCard
          imageUrl="https://example.com/image2.jpg"
          label="Lux"
          title="Luxurious Villa with a Private Pool"
        />
        <PropertyCard
          imageUrl="https://example.com/image3.jpg"
          label="Unique"
          title="Unique Dome House with Scenic Views"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
