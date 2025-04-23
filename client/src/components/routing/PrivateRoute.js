import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  return !auth.isAuthenticated && !auth.loading ? (
    <Navigate replace to='/login' />
  ) : (
    children
  );
};

export default PrivateRoute;
