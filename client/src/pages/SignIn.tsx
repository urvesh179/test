import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { siginAction } from '../actions/authActions';


const SignIn = () => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const dispatch = useDispatch();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    siginAction({ "email": email, "password": password }, dispatch, navigate);

  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white rounded-lg shadow-md p-8 space-y-4"
      >
        <h1 className="text-2xl font-semibold text-center">Sign In</h1>
        <div className="space-y-2">
          <label htmlFor="email" className="block">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full block bg-blue-500 text-white rounded-md py-2 font-semibold hover:bg-blue-600"
        >
          Sign In
        </button>

        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet? <button onClick={() => navigate("/signup")} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</button>
        </p>
      </form>
    </div>
  );
};

export default SignIn;