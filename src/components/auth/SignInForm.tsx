import React, { useState, useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import animationData from '../../assets/animation/loginAnimation.json';
import { Link } from 'react-router-dom';
import Logo from '../../../public/images/lotus-flower.png';
const SignInForm: React.FC = () => {
    
    const prodRef = useRef<LottieRefCurrentProps | null>(null);
    const [reverseCount, setReverseCount] = useState(0);
    const [hasValue, setHasValue] = useState({ username: false, password: false });
    const maxReverseCount = 1;

    const handleAnimationComplete = () => {
        if (prodRef.current) {
            const direction = reverseCount < maxReverseCount ? -1 : 1;
            prodRef.current.setDirection(direction);
            prodRef.current.play();
            setReverseCount((prev) => (direction === 1 ? 0 : prev + 1));
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof typeof hasValue) => {
        setHasValue((prevState) => ({
            ...prevState,
            [field]: e.target.value.trim().length > 0,
        }));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-muted-100 dark:bg-muted-900">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center max-w-screen-lg px-6">
                {/* Lottie Animation */}
                <div className="sm:w-1/2 px-4">
                    <Lottie
                        lottieRef={prodRef}
                        onComplete={handleAnimationComplete}
                        loop={false}
                        animationData={animationData}
                        className="w-full h-auto"
                    />
                </div>

                {/* Sign In Form */}
                <div className="sm:w-1/2 bg-white dark:bg-muted-800 rounded-md shadow-lg p-8">
                    <div className="text-center mb-6">
                        <img
                            className="mx-auto w-24"
                            src={Logo}
                            alt="CareHub Logo"
                        />
                        <h4 className="mt-4 text-2xl font-semibold text-muted-800 dark:text-white">
                            Welcome Back to CareHub
                        </h4>
                    </div>

                    <form>
                        <p className="mb-6 dark:text-muted-400">Sign in to continue</p>

                        {/* Username Input */}
                        <div className="relative mb-6">
                            <input
                                type="text"
                                id="username"
                                aria-label="Username"
                                onChange={(e) => handleChange(e, 'username')}
                                className="peer block w-full text-sm dark:bg-muted-800 rounded-md border border-muted-300 dark:border-muted-600 dark:text-muted-200 px-3 py-2 focus:outline-none focus:ring-0 focus:border-b-2 focus:border-indigo-500 dark:focus:border-indigo-500"
                            />
                            <label
                                htmlFor="username"
                                className={`absolute left-2 top-2.5 text-sm transition-all duration-200 transform bg-white dark:bg-muted-800 px-1 ${
                                    hasValue.username ? 'text-muted-500 dark:text-muted-400 -translate-y-5 left-2' : 'text-muted-500 dark:text-muted-200'
                                } peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-focus:left-2 peer-focus:text-indigo-500 peer-focus:-translate-y-5`}
                            >
                                Username
                            </label>
                        </div>

                        {/* Password Input */}
                        <div className="relative mb-6">
                            <input
                                type="password"
                                id="password"
                                aria-label="Password"
                                onChange={(e) => handleChange(e, 'password')}
                                className="peer block w-full text-sm dark:bg-muted-800 rounded-md border border-muted-300 dark:border-muted-600 dark:text-muted-200 px-3 py-2 focus:outline-none focus:ring-0 focus:border-b-2 focus:border-indigo-500 dark:focus:border-indigo-500"
                            />
                            <label
                                htmlFor="password"
                                className={`absolute left-2 top-2.5 text-sm transition-all duration-200 transform bg-white dark:bg-muted-800 px-1 ${
                                    hasValue.password ? 'text-muted-500 dark:text-muted-400 -translate-y-5 left-2' : 'text-muted-500 dark:text-muted-200'
                                } peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-focus:left-2 peer-focus:text-indigo-500 peer-focus:-translate-y-5`}
                            >
                                Password
                            </label>
                        </div>

                        <div className="text-center mb-6">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white font-medium py-2 rounded-md shadow-lg hover:opacity-90 transition"
                            >
                                Log in
                            </button>
                            <Link to="#!" className="block mt-4 text-sm text-muted-500 dark:text-muted-400 hover:underline">
                                Forgot password?
                            </Link>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="text-sm text-muted-500 dark:text-muted-400">Don't have an account?</p>
                            <Link
                                to="/signup"
                                className="text-indigo-500 hover:text-indigo-400 text-sm font-medium"
                            >
                                Register
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
