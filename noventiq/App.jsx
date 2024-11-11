import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ECommerce from './pages/ECommerce';
import InvestorRelations from './pages/InvestorRelations';
import News from './pages/News';
import Partners from './pages/Partners';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/ecommerce" element={<ECommerce />} />
        <Route path="/investor-relations" element={<InvestorRelations />} />
        <Route path="/news" element={<News />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
