import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <>
            <div><h1 className='text-2xl text-center'>Please Booking .........</h1></div>
        </>
    }

    if (user && user.uid) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoutes;