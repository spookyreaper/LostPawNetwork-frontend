import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo text-2xl font-bold">Lost Paw Network</div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.364 6.364a1 1 0 00-1.414-1.414L12 9.586 7.05 4.636a1 1 0 00-1.414 1.414L10.586 12l-4.95 4.95a1 1 0 101.414 1.414L12 14.414l4.95 4.95a1 1 0 001.414-1.414L13.414 12l4.95-4.95z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <ul className={`flex-col md:flex-row md:flex space-x-0 md:space-x-4 ${isOpen ? 'flex' : 'hidden'} md:block mt-4 md:mt-0`}>
          <li className="mb-2 md:mb-0"><Link to="/">Home</Link></li>
          <li className="mb-2 md:mb-0"><Link to="/lost-pets">Lost Pets</Link></li>
          <li className="mb-2 md:mb-0"><Link to="/found-pets">Found Pets</Link></li>
          <li className="mb-2 md:mb-0"><Link to="/login">Login</Link></li>
          <li className="mb-2 md:mb-0"><Link to="/register">Signup</Link></li>
          <li className="mb-2 md:mb-0 bg-green-500 px-3 py-1 rounded hover:bg-green-600"><Link to="/report">Report a Lost Pet</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
