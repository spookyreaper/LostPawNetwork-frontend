import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
