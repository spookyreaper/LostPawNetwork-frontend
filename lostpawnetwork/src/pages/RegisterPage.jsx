import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Register from '../components/Register';

function RegisterPage() {
    const handleRegisterSuccess = (data) => {
        console.log('Registration successful:', data);
        // Redirect or handle post-registration logic here
    };

    const handleRegisterError = (errorMessage) => {
        console.error('Registration failed:', errorMessage);
        // Display error message to the user
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
                    <Register onRegisterSuccess={handleRegisterSuccess} onRegisterError={handleRegisterError} />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default RegisterPage;
