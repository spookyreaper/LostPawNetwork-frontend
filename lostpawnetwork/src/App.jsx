import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReportPage from './pages/ReportPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CompleteProfilePage from './pages/CompleteProfilePage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import LostDogsPage from './pages/LostDogsPage';
import LostCatsPage from './pages/LostCatsPage';
import LostPetsAllPage from './pages/LostPetsAllPage';
import FoundDogsPage from './pages/FoundDogsPage';
import FoundCatsPage from './pages/FoundCatsPage';
import FoundPetsAllPage from './pages/FoundPetsAllPage';
import 'leaflet/dist/leaflet.css';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    console.log('App loaded. Current userId:', userId);
  }, [userId]);

  const handleLoginSuccess = (data) => {
    console.log('Login success data:', data);
    setUserId(data.userId);
  };

  const handleLoginError = (message) => {
    console.error('Login error:', message);
  };

  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage setUserId={setUserId} />} />
              <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} onLoginError={handleLoginError} />} />
              <Route path="/complete-profile" element={<CompleteProfilePage userId={userId} />} />
              <Route path="/profile" element={<ProfilePage userId={userId} />} />
              <Route path="/edit-profile" element={<EditProfilePage userId={userId} />} />
              <Route path="/profile/:id" element={<ProfilePage />} />
              <Route path="/reports/lost/all" element={<LostPetsAllPage />} />
              <Route path="/reports/lost/dogs" element={<LostDogsPage />} />
              <Route path="/reports/lost/cats" element={<LostCatsPage />} />
              <Route path="/reports/found/all" element={<FoundPetsAllPage />} />
              <Route path="/reports/found/dogs" element={<FoundDogsPage />} />
              <Route path="/reports/found/cats" element={<FoundCatsPage />} />
              <Route path="/report" element={<ReportPage userId={userId} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
