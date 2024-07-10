import React from 'react';
import axios from 'axios';
import { useLogout } from '../auth/Config';
import { API_URL } from '../auth/Config';

function Logout() {
  const logout = useLogout();
  
  const handleLogout = async () => {
    try {
      await axios.post(API_URL + '/user/logout', null, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      logout()
    } catch (error) {
      console.error('Logout failed:', error);

      if (error.response && error.response.status === 401) {
        // If we get a 401 Unauthorized, remove the token and redirect to login
        logout()
      } else {
        // Handle other types of errors here
        // You might want to show an error message to the user
      }
    }
  };

  return <a className="dropdown-item" onClick={handleLogout}>Logout</a>;
}

export default Logout;