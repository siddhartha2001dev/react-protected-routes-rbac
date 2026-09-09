import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ============================================================================
// 🔄 CALLBACK PROPS CONCEPT - CHILD-TO-PARENT COMMUNICATION ("LIFTING STATE UP")
// ============================================================================
// 1. WHAT IS A CALLBACK PROP?
//    - While normal props pass data DOWN from Parent to Child,
//      a Callback Prop is a FUNCTION passed from Parent to Child.
//    - When the child invokes this function with arguments (`onLogin(data)`),
//      data travels UP from Child to Parent!
//
// 2. IN THIS FILE:
//    - `onLogin`: Callback function prop received from `App.jsx`.
//    - On form submission, `onLogin({ name, role })` sends the credentials
//      to `App.jsx` to update the global `user` auth state.
// ============================================================================

const LoginPage = ({ onLogin }) => {
    // State to toggle between Login and Sign Up
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [Role, setRole] = useState('user');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send data UP to App.jsx via the callback prop
        onLogin({
            name: email || 'User',
            role: Role
        });

        // Navigate to the respective dashboard based on selected role
        if (Role === 'admin') {
            navigate('/admin');
        } else {
            navigate('/user');
        }
    };


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden p-8 border border-gray-100">

                {/* Toggle Button Group (Login / Sign Up) */}
                <div className="flex bg-gray-100 p-1.5 rounded-xl mb-6">
                    <button
                        type="button"
                        onClick={() => setIsLogin(true)}
                        className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all cursor-pointer ${isLogin
                            ? 'bg-white text-blue-600 shadow-sm font-bold'
                            : 'text-gray-500 hover:text-gray-800'
                            }`}
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={() => setIsLogin(false)}
                        className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all cursor-pointer ${!isLogin
                            ? 'bg-white text-blue-600 shadow-sm font-bold'
                            : 'text-gray-500 hover:text-gray-800'
                            }`}
                    >
                        Sign Up
                    </button>
                </div>

                {/* ---------------- LOGIN FORM ---------------- */}
                {isLogin ? (
                    <form id="loginForm" onSubmit={handleSubmit}
                        className="space-y-4">
                        <div className="text-center mb-4">
                            <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
                            <p className="text-gray-500 text-xs mt-1">Enter your details to sign in</p>
                        </div>

                        <div>
                            <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="loginEmail"
                                placeholder="name@example.com"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="loginPassword"
                                placeholder="••••••••"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                            />
                        </div>

                        {/* ROLE SELECTOR (Admin vs User for Protected Routes) */}
                        <div>
                            <label htmlFor="loginRole" className="block text-sm font-medium text-gray-700">
                                Login As (Role)
                            </label>

                            <select
                                id="loginRole" value={Role} onChange={(e) => setRole(e.target.value)}

                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm bg-white cursor-pointer"
                            >
                                <option value="user">User 🛒</option>
                                <option value="admin">Admin 🛡️</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-between text-sm pt-1">
                            <label className="flex items-center text-gray-600">
                                <input type="checkbox" className="h-4 w-4 text-blue-500 rounded border-gray-300 mr-2" />
                                Remember me
                            </label>
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-700 text-xs">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2.5 px-4 rounded-lg shadow-md text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition cursor-pointer mt-2"
                        >
                            Sign In
                        </button>
                    </form>
                ) : (
                    /* ---------------- SIGN UP FORM ---------------- */
                    <form id="signupForm" className="space-y-4">
                        <div className="text-center mb-4">
                            <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
                            <p className="text-gray-500 text-xs mt-1">Get started with a free account</p>
                        </div>

                        <div>
                            <label htmlFor="signupName" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="signupName"
                                placeholder="Siddharth"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="signupEmail" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="signupEmail"
                                placeholder="name@example.com"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="signupPassword" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="signupPassword"
                                placeholder="••••••••"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                            />
                        </div>

                        {/* ROLE SELECTOR FOR SIGNUP */}
                        <div>
                            <label htmlFor="signupRole" className="block text-sm font-medium text-gray-700">
                                Select Role
                            </label>
                            <select
                                id="signupRole"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm bg-white cursor-pointer"
                            >
                                <option value="user">User 🛒</option>
                                <option value="admin">Admin 🛡️</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2.5 px-4 rounded-lg shadow-md text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition cursor-pointer mt-2"
                        >
                            Create Account
                        </button>
                    </form>
                )}

            </div>
        </div>
    )
}

export default LoginPage