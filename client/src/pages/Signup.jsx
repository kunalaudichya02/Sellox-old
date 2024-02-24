import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';

const SignUpForm = () => {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-300 ">
                    <h1 className="mb-8 text-4xl font-semibold text-center ">Sign up</h1>
                    <input 
                        type="text"
                        required
                        className="block border border-gray-300 w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />
 
                    <input 
                        type="text"
                        required
                        className="block border border-gray-300 w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="text"
                        required
                        className="block border border-gray-300 w-full p-3 rounded mb-4"
                        name="password"
                        placeholder='College Enroll No. (for ex: 2021CTAE000)  '/>
                    <input 
                        type="password"
                        required
                        className="block border border-gray-300 w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />

                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-xl  font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
                    >Create Account</button>

                    {/* <div className="text-center text-sm text-gray-600 mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-gray-600 text-gray-600" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-gray-600 text-gray-600" href="#">
                            Privacy Policy
                        </a>
                    </div> */}
                </div>

                <div className="text-gray-600 mt-6">
                    Already have an account? 
                    <Link className="no-underline border-b border-blue-500 text-blue-500" to="/user/Login">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
