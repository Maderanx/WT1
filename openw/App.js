// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import SearchSection from './SearchSection';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <SearchSection />
            </>
          } />
          <Route path="/guide" element={<div>Guide Page</div>} />
          <Route path="/api" element={<div>API Page</div>} />
          <Route path="/dashboard" element={<div>Dashboard Page</div>} />
          <Route path="/marketplace" element={<div>Marketplace Page</div>} />
          <Route path="/pricing" element={<div>Pricing Page</div>} />
          <Route path="/maps" element={<div>Maps Page</div>} />
          <Route path="/our-initiatives" element={<div>Our Initiatives Page</div>} />
          <Route path="/partners" element={<div>Partners Page</div>} />
          <Route path="/blog" element={<div>Blog Page</div>} />
          <Route path="/business" element={<div>For Business Page</div>} />
          <Route path="/signin" element={<div>Sign In Page</div>} />
          <Route path="/support" element={<div>Support Page</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;