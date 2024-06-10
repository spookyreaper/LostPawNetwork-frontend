import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');
    console.log('AuthProvider useEffect: storedToken:', storedToken, 'storedUserId:', storedUserId);
    if (storedToken) {
      setToken(storedToken);
      setUserId(storedUserId);
    }
  }, []);

  const login = (token, userId) => {
    console.log('AuthProvider login: token:', token, 'userId:', userId);
    setToken(token);
    setUserId(userId);
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
  };

  const logout = () => {
    console.log('AuthProvider logout');
    setToken(null);
    setUserId(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  };

  return (
    <AuthContext.Provider value={{ token, userId, login, logout, isLoggedIn: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};
