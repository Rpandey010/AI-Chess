import React from 'react';
import axios from 'axios';

const GoogleAuth = () => {
  const handleLogin = () => {
    window.location = 'http://localhost:5000/auth/google';
  };

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:5000/auth/logout', { withCredentials: true });
      // Instead of reloading, update the app state
      window.location.href = 'http://localhost:3000';
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default GoogleAuth;