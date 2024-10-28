// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Stays from './pages/Stays';
import Experiences from './pages/Experiences';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stays" element={<Stays />} />
        <Route path="/experiences" element={<Experiences />} />
      </Routes>
    </Router>
  );
};

export default App;
