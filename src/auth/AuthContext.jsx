import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const appId = "586315813039667"
  const apiVersion = "v20.0"
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [isLoggedIn, setIsLoggedIn] = useState("");

  

  const logout = () => {
    window.FB.logout(() => {
      setUser(null);
      localStorage.removeItem('user');
    });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
