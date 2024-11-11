// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './pages/Menu';
import Shop from './pages/Shop';
import OrderOnline from './pages/OrderOnline';
import Locator from './pages/Locator';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/locator" element={<Locator />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
