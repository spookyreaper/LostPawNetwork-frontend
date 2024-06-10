import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isReportsOpen, setIsReportsOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, logout, userId } = useContext(AuthContext);

  useEffect(() => {
    console.log('Navbar useEffect: isLoggedIn:', isLoggedIn, 'userId:', userId);
  }, [isLoggedIn, userId]);

  const handleLogout = () => {
    logout();
    setIsAccountOpen(false);
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo text-2xl font-bold">
          <Link to="/" className="text-white">Lost Paw Network</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
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
        <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li className="mb-2 md:mb-0"><Link to="/" className="text-indigo-600 hover:text-indigo-500">Home</Link></li>
          <li className="relative mb-2 md:mb-0"
            onMouseEnter={() => setIsReportsOpen(true)}
            onMouseLeave={() => setIsReportsOpen(false)}
          >
            <div className="cursor-pointer text-indigo-600 hover:text-indigo-500 flex items-center">
              Reports
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            <ul className={`absolute bg-gray-800 text-white mt-2 py-2 w-48 border rounded-lg ${isReportsOpen ? 'block' : 'hidden'}`}>
              <li className="px-4 py-2 text-gray-400 cursor-default">Lost Pets</li>
              <li className="px-4 py-2 hover:bg-gray-700"><Link to="/reports/lost/all">All Pets</Link></li>
              <li className="px-4 py-2 hover:bg-gray-700"><Link to="/reports/lost/cats">Cats</Link></li>
              <li className="px-4 py-2 hover:bg-gray-700"><Link to="/reports/lost/dogs">Dogs</Link></li>
              <li className="px-4 py-2 text-gray-400 cursor-default">Found Pets</li>
              <li className="px-4 py-2 hover:bg-gray-700"><Link to="/reports/found/all">All Pets</Link></li>
              <li className="px-4 py-2 hover:bg-gray-700"><Link to="/reports/found/cats">Cats</Link></li>
              <li className="px-4 py-2 hover:bg-gray-700"><Link to="/reports/found/dogs">Dogs</Link></li>
            </ul>
          </li>
          {isLoggedIn ? (
            <li className="relative mb-2 md:mb-0"
              onMouseEnter={() => setIsAccountOpen(true)}
              onMouseLeave={() => setIsAccountOpen(false)}
            >
              <div className="cursor-pointer text-indigo-600 hover:text-indigo-500 flex items-center">
                My Account
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              <ul className={`absolute bg-gray-800 text-white right-0 mt-2 py-2 w-48 border rounded-lg ${isAccountOpen ? 'block' : 'hidden'}`}>
                <li className="px-4 py-2 hover:bg-gray-700"><Link to="/profile">Profile</Link></li>
                <li className="px-4 py-2 hover:bg-gray-700"><Link to="/settings">Settings</Link></li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={handleLogout}>Logout</li>
              </ul>
            </li>
          ) : (
            <>
              <li className="mb-2 md:mb-0"><Link to="/login" className="text-indigo-600 hover:text-indigo-500">Login</Link></li>
              <li className="mb-2 md:mb-0"><Link to="/register" className="text-indigo-600 hover:text-indigo-500">Signup</Link></li>
            </>
          )}
          <li className="mb-2 md:mb-0 bg-green-500 px-3 py-1 rounded hover:bg-green-600"><Link to="/report">Report a Lost Pet</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
