import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupAction } from '../actions/authActions';

const SignUp: React.FC = () => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');

  const [mobile, setMobile] = useState('');

  const [validation, setValidation] = useState({
    email: true,
    mobile: true
  })

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const validate = () => {

    const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const mobileRegx = /^\d{10}$/

    return {
      email: emailRegx.test(email),
      mobile: mobileRegx.test(mobile)
    }

  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    
    const { email, mobile } = validate();

    if (email && mobile)
      signupAction({ "email": email, "password": password, "firstName": firstName, "lastName": lastName, "mobile": mobile }, dispatch, navigate);

    setValidation({
      email,
      mobile
    })

  };


  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white rounded-lg shadow-md p-8 space-y-4"
      >
        <h1 className="text-2xl font-semibold text-center">Sign Up</h1>
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
          {!validation.email && (
            <p className="text-red-500 text-sm">Please provide valid email</p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="firstname" className="block">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastname" className="block">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="mobile" className="block">
            Mobile
          </label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {!validation.email && (
            <p className="text-red-500 text-sm">Please provide valid mobile number</p>
          )}
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
          Sign Up
        </button>

        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already Registered user? <button onClick={() => navigate("/signin")} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;