import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';
import { LoginContext } from '../App';

const ProtectedRoute = () => {
    const [user,]=useContext(LoginContext);
    const location=useLocation();
    console.log('location:',location);
    const useAuth=()=>{
        return user && user.isLoggedIn;
    }
    const isAuth=useAuth();
    return isAuth ? <Outlet/> : <Navigate to="/login" state={{ from: location.pathname }}/>;
};

export default ProtectedRoute;