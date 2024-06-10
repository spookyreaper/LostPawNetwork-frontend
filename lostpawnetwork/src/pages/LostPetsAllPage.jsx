import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LostPetsAll from '../components/LostPetsAll';

const LostPetsAllPage = () => {
  return (
    <>
      <Navbar />
      <LostPetsAll />
      <Footer />
    </>
  );
};

export default LostPetsAllPage;
