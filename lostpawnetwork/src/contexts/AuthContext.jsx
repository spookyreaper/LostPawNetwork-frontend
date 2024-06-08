import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const login = (token, userId) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
    setUserId(userId);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userId }}>
      {children}
    </AuthContext.Provider>
  );
};
