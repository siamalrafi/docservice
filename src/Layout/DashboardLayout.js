import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import { FaBookmark, FaMagento } from 'react-icons/fa';

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
                    <ul className="menu p-3 text-center border-r-4 border-indigo-400 w-60 bg-base-100 text-base-content">
                        <li>
                            <Link className=' text text-white bg-gradient-to-r from-indigo-500 to-pink-500'
                                to="/dashboard">
                                <div className='flex justify-items-center'>
                                    <FaBookmark className='text-xl mt-1 px-1' />
                                    <p className='text-xl'>My Appointments  </p>
                                </div>

                            </Link>
                        </li>

                        <li><Link className='text-xl mt-3 text-black border-2 text-center  border-black '
                            to="/dashboard/allusers">
                            <div className='flex justify-items-center'>
                                <FaMagento className='text-xl mt-1 px-1' />
                                <p className='text-xl'>All Users  </p>
                            </div>
                        </Link></li>


                        {/*  {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All users</Link></li>
                            </>
                        } */}

                    </ul>

                </div>
            </div>
        </div >
    );
};

export default DashboardLayout;