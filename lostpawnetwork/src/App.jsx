// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ReportPage from './pages/ReportPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4"> {/* Tailwind classes for centering and padding */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reports" element={<ReportPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Additional routes can be added here */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
