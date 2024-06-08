import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Profile from '../components/Profile';

const ProfilePage = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      console.log(`Fetching user data for userId: ${userId}`);
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      try {
        const response = await fetch(`http://localhost:1337/user/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });
        const data = await response.json();
        console.log('Fetched user data:', data);
        if (response.ok) {
          setUser(data);
        } else {
          console.error('Failed to fetch user data:', data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {user ? <Profile user={user} /> : <p>Loading...</p>}
    </div>
  );
};

export default ProfilePage;
