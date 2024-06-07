import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    setIsAccountOpen(false);
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccountMenu = () => {
    setIsAccountOpen(!isAccountOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo text-2xl font-bold">
          <Link to="/">Lost Paw Network</Link>
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
          <li className="mb-2 md:mb-0"><Link to="/">Home</Link></li>
          <li className="mb-2 md:mb-0"><Link to="/reports">Reports</Link></li>
          {isLoggedIn ? (
            <li className="relative mb-2 md:mb-0">
              <button className="focus:outline-none" onClick={toggleAccountMenu}>
                My Account
              </button>
              <ul className={`absolute bg-gray-800 text-white right-0 mt-2 py-2 w-48 border rounded-lg ${isAccountOpen ? 'block' : 'hidden'}`}>
                <li className="px-4 py-2 hover:bg-gray-700"><Link to="/profile">Profile</Link></li>
                <li className="px-4 py-2 hover:bg-gray-700"><Link to="/settings">Settings</Link></li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={handleLogout}>Logout</li>
              </ul>
            </li>
          ) : (
            <>
              <li className="mb-2 md:mb-0"><Link to="/login">Login</Link></li>
              <li className="mb-2 md:mb-0"><Link to="/register">Signup</Link></li>
            </>
          )}
          <li className="mb-2 md:mb-0 bg-green-500 px-3 py-1 rounded hover:bg-green-600"><Link to="/report">Report a Lost Pet</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
