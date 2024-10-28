import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ForgotEmail from './components/ForgotEmail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-email" element={<ForgotEmail />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
