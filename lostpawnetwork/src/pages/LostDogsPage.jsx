import React from 'react';
import LostDogs from '../components/LostDogs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LostDogsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4 md:p-8 bg-gray-100">
        <div className="container mx-auto">
          <LostDogs />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LostDogsPage;
