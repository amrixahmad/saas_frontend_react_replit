import React from 'react';
import { useNavigate } from 'react-router-dom';

const selectEnv = (test=true) => {
  const devUrl = 'https://d5825be5-1dda-4753-9d13-04bdd78a61b7-00-255p98eoxe29n.sisko.replit.dev';
  const prodUrl = 'https://d5825be5-1dda-4753-9d13-04'
  
  if (test) {
    return devUrl
  } else {
    return prodUrl
  } 
  
}

const test = true

export const API_URL = selectEnv(test)

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
    throw new Error('No authentication token found');
  };

  return logout;
};