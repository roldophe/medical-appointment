import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import React, { useRef, useState } from 'react';
import animationData from '../../assets/animation/loginAnimation.json';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/lotus-flower.png';
const SignUpForm: React.FC = () => {
    const prodRef = useRef<LottieRefCurrentProps | null>(null);
    const [reverseCount, setReverseCount] = useState(0);
    const maxReverseCount = 1;
    const [hasValue, setHasValue] = useState({ fullName: false, email: false, username: false, password: false ,confirmPassword: false});
    const handleAnimationComplete = () => {
        if (prodRef.current) {
            if (reverseCount < maxReverseCount) {
                prodRef.current.setDirection(-1);
                prodRef.current.play();
                setReverseCount((prev) => prev + 1);
            } else {
                prodRef.current.setDirection(1);
                prodRef.current.play();
                setReverseCount(0);
            }
        }
    };

    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof typeof hasValue) => {
        setHasValue((prevState) => ({
            ...prevState,
            [field]: e.target.value.trim().length > 0,
        }));
    };


    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center max-w-screen-lg px-6">
            <div className="sm:w-1/2 px-4">
                    <Lottie
                        lottieRef={prodRef}
                        onComplete={handleAnimationComplete}
                        loop={false}
                        animationData={animationData}
                        className="w-full h-auto"
                    />
                </div>
                <div className="sm:w-1/2 bg-white dark:bg-muted-800 rounded-md shadow-lg p-8">
                    <div className="text-center mb-6">
                        <img
                            className="mx-auto w-24"
                            src={Logo}
                            alt="logo"
                        />
                        <h4 className="mt-4 text-2xl font-semibold text-muted-800 dark:text-white">
                            Create an Account on CareHub
                        </h4>
                    </div>
                    <form>
                        <p className="mb-6 text-muted-400">Sign up to get started</p>

                        {/* Full Name input */}
                        <div className="relative mb-6">
                            <input
                                type="text"
                                id="fullName"
                                aria-label="Full Name"
                                onChange={(e) => handleChange(e, 'fullName')}
                                className="peer block w-full text-sm dark:bg-muted-800 rounded-md border border-muted-300 dark:border-muted-600 dark:text-muted-200 px-3 py-2 focus:outline-none focus:ring-0 focus:border-b-2 focus:border-indigo-500 dark:focus:border-indigo-500"
                            />
                            <label
                                htmlFor="fullName"
                                className={`absolute left-2 top-2.5 text-sm transition-all duration-200 transform bg-white dark:bg-muted-800 px-1 ${
                                    hasValue.fullName ? 'text-muted-500 dark:text-muted-400 -translate-y-5 left-2' : 'text-muted-500 dark:text-muted-200'
                                } peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-focus:left-2 peer-focus:text-indigo-500 peer-focus:-translate-y-5`}
                            >
                                Full Name
                            </label>
                        </div>

                        {/* Email input */}
                        <div className="relative mb-6">
                            <input
                                type="email"
                                id="email"
                                aria-label="Email Address"
                                onChange={(e) => handleChange(e, 'email')}
                                className="peer block w-full text-sm dark:bg-muted-800 rounded-md border border-muted-300 dark:border-muted-600 dark:text-muted-200 px-3 py-2 focus:outline-none focus:ring-0 focus:border-b-2 focus:border-indigo-500 dark:focus:border-indigo-500"
                            />
                            <label
                                htmlFor="email"
                                className={`absolute left-2 top-2.5 text-sm transition-all duration-200 transform bg-white dark:bg-muted-800 px-1 ${
                                    hasValue.email ? 'text-muted-500 dark:text-muted-400 -translate-y-5 left-2' : 'text-muted-500 dark:text-muted-200'
                                } peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-focus:left-2 peer-focus:text-indigo-500 peer-focus:-translate-y-5`}
                            >
                                Email Address
                            </label>
                        </div>

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

                        {/* Confirm Password input */}
                        <div className="relative mb-6">
                            <input
                                type="password"
                                id="confirmPassword"
                                aria-label="Confirm Password"
                                onChange={(e) => handleChange(e, 'confirmPassword')}
                                className="peer block w-full text-sm dark:bg-muted-800 rounded-md border border-muted-300 dark:border-muted-600 dark:text-muted-200 px-3 py-2 focus:outline-none focus:ring-0 focus:border-b-2 focus:border-indigo-500 dark:focus:border-indigo-500"
                            />
                            <label
                                htmlFor="confirmPassword"
                                className={`absolute left-2 top-2.5 text-sm transition-all duration-200 transform bg-white dark:bg-muted-800 px-1 ${
                                    hasValue.confirmPassword ? 'text-muted-500 dark:text-muted-400 -translate-y-5 left-2' : 'text-muted-500 dark:text-muted-200'
                                } peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-focus:left-2 peer-focus:text-indigo-500 peer-focus:-translate-y-5`}
                            >
                                Confirm Password
                            </label>
                        </div>

                        <div className="text-center mb-6">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white font-medium py-2 rounded-md shadow-lg hover:opacity-90 transition"
                            >
                                Sign Up
                            </button>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="text-sm text-muted-400">Already have an account?</p>
                            <Link
                                to="/signin"
                                className="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
                            >
                                Login here
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
