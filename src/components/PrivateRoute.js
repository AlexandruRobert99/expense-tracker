import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  const authInfo = localStorage.getItem('auth');
  return authInfo && JSON.parse(authInfo).isAuth;
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

export default PrivateRoute;
