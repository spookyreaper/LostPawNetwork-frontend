// src/pages/LoginPage.jsx
import React from 'react';
import Login from '../components/Login';

function LoginPage() {
    const handleLoginSuccess = (data) => {
        console.log('Login successful:', data);
        // Redirect or manage login state here
    };

    const handleLoginError = (errorMessage) => {
        console.error('Login failed:', errorMessage);
        // Handle error, possibly showing an error message on the UI
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                <Login onLoginSuccess={handleLoginSuccess} onLoginError={handleLoginError} />
            </div>
        </div>
    );
}

export default LoginPage;
