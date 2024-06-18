import React from 'react';
import {  Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: any) => {

  if (!localStorage.getItem('token')) {
    // Redirect to login if not authenticated
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute