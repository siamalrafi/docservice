import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    // const [isAdmin] = useAdmin(user?.email)

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-3 text-center w-60 bg-base-100 text-base-content">
                        {/* <li><Link className='text-xl text-white  bg-gradient-to-r from-pink-600  to-indigo-500' to="/dashboard">My Appointments</Link></li> */}
                        <li><Link className='text-xl text-white bg-gradient-to-r from-indigo-500 to-pink-500'
                            to="/dashboard">My Appointments</Link></li>

                        {/*  {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All users</Link></li>
                            </>
                        } */}

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;