// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import './App.css';

const Foundations = ({ isDarkMode }) => (
  <div style={{ padding: '64px' }}>Foundations Content</div>
);

const Components = ({ isDarkMode }) => (
  <div style={{ padding: '64px' }}>Components Content</div>
);

const TeamSupport = ({ isDarkMode }) => (
  <div style={{ padding: '64px' }}>Team Support Content</div>
);

const WhatsNew = ({ isDarkMode }) => (
  <div style={{ padding: '64px' }}>What's New Content</div>
);

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Router>
      <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Routes>
          <Route path="/" element={<HeroSection isDarkMode={isDarkMode} />} />
          <Route path="/foundations" element={<Foundations isDarkMode={isDarkMode} />} />
          <Route path="/components" element={<Components isDarkMode={isDarkMode} />} />
          <Route path="/team-support" element={<TeamSupport isDarkMode={isDarkMode} />} />
          <Route path="/whats-new" element={<WhatsNew isDarkMode={isDarkMode} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;