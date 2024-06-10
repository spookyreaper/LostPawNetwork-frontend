import React from 'react';
import LostCats from '../components/LostCats';
import Navbar from '../components/Navbar';  // Ensure you have this import if Navbar is a separate component
import Footer from '../components/Footer';  // Ensure you have this import if Footer is a separate component

const LostPetsPage = () => {
  return (
    <>
      <Navbar />
      <LostCats />
      <Footer />
    </>
  );
};

export default LostPetsPage;
