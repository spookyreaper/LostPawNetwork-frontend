import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);

  const login = (data) => {
    setUserId(data.userId);
    setToken(data.token);
    localStorage.setItem('userId', data.userId);
    localStorage.setItem('token', data.token);
  };

  const logout = () => {
    setUserId(null);
    setToken(null);
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ userId, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
