// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import Energy from './pages/Energy';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/energy" element={<Energy />} />
      </Routes>
    </Router>
  );
};

export default App;
