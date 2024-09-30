
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GoogleAuth from './components/GoogleAuth';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/current_user', { withCredentials: true });
        setUser(res.data);
      } catch (err) {
        console.error('Error fetching user:', err);
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      <h1>Chess AI</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <GoogleAuth />
        </div>
      ) : (
        <GoogleAuth />
      )}
      {/* Add chess board and AI components here */}
    </div>
  );
}

export default App;