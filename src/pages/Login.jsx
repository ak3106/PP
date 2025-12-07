import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
// Removed 'Google' import
import { Mail, Lock, LogIn, User, ArrowLeft } from 'lucide-react';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';

/**
 * Custom inline SVG for Google Logo (Fixes 'Google' export error).
 */
const GoogleIcon = ({ className = "w-5 h-5 mr-2" }) => (
    <svg 
        className={className} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 533.5 544.3"
    >
        <path fill="#4285f4" d="M533.5 273.3c0-21.7-1.8-37-3.6-52.5h-201v100.2h117.8c-12 55.4-44.2 92.5-99 125.7-44.6 27.5-98.8 45-163 45-124 0-224.2-97.4-224.2-221.7s100.2-221.7 224.2-221.7c67.3 0 120.9 26 163.6 64.9l75.5-72.3c-44.6-43.1-105.8-69.5-179.1-69.5-146.4 0-265.4 119.5-265.4 263.6S129.1 544.3 275.5 544.3c103.8 0 179.9-38.3 227.5-89.9 44.6-48.4 68.3-111.4 68.3-181.1z"/>
        <path fill="#34a853" d="M141.2 323.5l102.1 76.5c18.5 14.2 41.5 24.3 64.8 24.3 35.8 0 69.8-13.6 97.4-38.4l75.5 72.3c-53.6 47.9-122.5 74.6-211.5 74.6C129.1 544.3 10 424.8 10 273.3S129.1 323.5 141.2 323.5z"/>
        <path fill="#fbbc05" d="M533.5 273.3c0-21.7-1.8-37-3.6-52.5h-201v100.2h117.8c-12 55.4-44.2 92.5-99 125.7-44.6 27.5-98.8 45-163 45-124 0-224.2-97.4-224.2-221.7s100.2-221.7 224.2-221.7c67.3 0 120.9 26 163.6 64.9l75.5-72.3c-44.6-43.1-105.8-69.5-179.1-69.5-146.4 0-265.4 119.5-265.4 263.6S129.1 544.3 275.5 544.3c103.8 0 179.9-38.3 227.5-89.9 44.6-48.4 68.3-111.4 68.3-181.1z"/>
        <path fill="#ea4335" d="M141.2 225.5l102.1-76.5c18.5-14.2 41.5-24.3 64.8-24.3 35.8 0 69.8 13.6 97.4 38.4l75.5-72.3C479 13.2 409.1-13.5 319.1-13.5c-146.4 0-265.4 119.5-265.4 263.6S129.1 544.3 275.5 544.3c103.8 0 179.9-38.3 227.5-89.9 44.6-48.4 68.3-111.4 68.3-181.1z" transform="translate(0 -13.5)"/>
    </svg>
);


const Login = ({ onLogin }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }
        
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        setIsLoading(true);

        // --- Phase 1: Simulate Authentication ---
        const redirectPath = localStorage.getItem('redirect_after_login') || '/';

        setTimeout(() => {
            setIsLoading(false);
            if (email.includes('@') && password.length >= 6) {
                // Simulate successful authentication
                onLogin({ email: email });
                localStorage.removeItem('redirect_after_login'); // Clear redirect path
                navigate(redirectPath); // Redirect to original path or home
            } else {
                setError('Invalid email or password. Hint: Any valid-looking email/password > 6 chars works in Phase 1.');
            }
        }, 1500);
    };

    return (
        <div className="max-w-md mx-auto px-4 py-16 min-h-[80vh]">
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-indigo-100 animate-fadeInUp">
                <h1 className="text-3xl font-extrabold text-indigo-700 mb-2 text-center">
                    Welcome Back!
                </h1>
                <p className="text-gray-600 mb-8 text-center">
                    Sign in to continue your order or access your profile.
                </p>

                <form onSubmit={handleLogin} className="space-y-6">
                    
                    <Input
                        label="Email Address"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        required
                    />
                    
                    <Input
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                    />

                    {error && (
                        <div className="p-3 bg-red-100 text-red-700 rounded-xl text-sm">
                            {error}
                        </div>
                    )}

                    <Button 
                        type="submit" 
                        className="w-full py-3 text-lg flex items-center justify-center"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        ) : (
                            <LogIn className="w-5 h-5 mr-2" />
                        )}
                        {isLoading ? 'Authenticating...' : 'Sign In'}
                    </Button>
                </form>

                <div className="my-6 flex items-center before:flex-1 before:border-t before:border-gray-300 after:flex-1 after:border-t after:border-gray-300">
                    <p className="text-center font-semibold mx-4 text-gray-600">OR</p>
                </div>
                
                {/* Google Sign-in Placeholder with Inline SVG */}
                <Button 
                    variant="secondary" 
                    className="w-full py-3 flex items-center justify-center"
                    onClick={() => setError('Google Sign-In integration coming in Phase 2!')}
                >
                    <GoogleIcon className="w-5 h-5 mr-2" /> Sign In with Google
                </Button>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account? 
                    <NavLink to="/register" className="text-indigo-600 font-semibold hover:text-indigo-700 ml-1">
                        Sign Up
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;