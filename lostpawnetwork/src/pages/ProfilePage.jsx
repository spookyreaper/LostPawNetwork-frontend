// ProfilePage.jsx
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Profile from '../components/Profile';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProfilePage = () => {
  const { userId, token } = useContext(AuthContext);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      console.log(`Fetching user profile data for userId: ${userId}`);
      try {
        const response = await fetch(`http://localhost:1337/user/profile/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });
        console.log('Response status:', response.status); // Log response status
        const data = await response.json();
        console.log('Fetched user profile data:', data);
        if (response.ok) {
          setUserProfile(data);
        } else {
          console.error('Failed to fetch user profile data:', data);
        }
      } catch (error) {
        console.error('Error fetching user profile data:', error);
      }
    };

    if (userId && token) {
      fetchUserProfile();
    }
  }, [userId, token]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        {userProfile ? (
          <Profile
            user={userProfile.user}
            lostReports={userProfile.lostReports}
            foundReports={userProfile.foundReports}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
