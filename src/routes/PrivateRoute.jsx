import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation(); // Access the current location

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>; // Show loading state
    }
    if (user) {
        return children; // Render children if the user is logged in
    }
    if (!user) {
        toast.error("Please Login To See Details");
      }
    // If no user, show toast and redirect
    return <Navigate state={location.pathname} to="/login" />
};

export default PrivateRoute;
