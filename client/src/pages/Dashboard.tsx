import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const userData = useSelector((stor: any) => stor.user.userData)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {

    const id = localStorage.getItem('id') ? localStorage.getItem('id') : null

    if (localStorage.getItem('token') && id) {

      getUserData(JSON.parse(id), dispatch, navigate)
    }

  }, [])

  const logout = () => {

    localStorage.clear();

    navigate("/signin");
    
  }

  return (
    <>
      <header className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-end items-center">
          <button
            onClick={logout}
            className="text-white px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Logout
          </button>
        </div>
      </header>
      <div className="flex flex-col bg-gray-100 p-4 rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">Profile Details</h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Registered User Details</h2>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">firstname:</span>
            <span>{userData.firstname}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">lastname:</span>
            <span>{userData.lastname}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">mobile:</span>
            <span>{userData.mobile}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Email Address:</span>
            <span>{userData.email}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;