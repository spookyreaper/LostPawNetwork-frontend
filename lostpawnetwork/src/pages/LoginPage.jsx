import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from '../components/Login';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();

    const handleLoginSuccess = (data) => {
        console.log('Login successful:', data);
        navigate('/'); // Redirect to home page or dashboard
    };

    const handleLoginError = (errorMessage) => {
        console.error('Login failed:', errorMessage);
        // Handle error, possibly showing an error message on the UI
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    <Login onLoginSuccess={handleLoginSuccess} onLoginError={handleLoginError} />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default LoginPage;
