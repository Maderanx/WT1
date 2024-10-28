import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Contact from './components/Contact'; // Import Contact Component
import './App.css';
function App() {
return (
<Router>
<Header />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/pricing" element={<Pricing />} />
<Route path="/contact" element={<Contact />} /> {/* Contact Route */}
</Routes>
</Router>
);
}
export default App;