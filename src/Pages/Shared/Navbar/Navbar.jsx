import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user?.email);

    const manuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>

        {
            user?.email ?
                <>
        <li><Link to='/dashboard'>Dashboard</Link></li>

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img title={user.displayName} src="https://placeimg.com/80/80/people" alt='user-img' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 mt-3 p-2">
                            <li>
                                <Link>
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li>
                                <Link>Settings</Link></li>
                            <li onClick={logOut}>
                                <Link>Logout</Link></li>
                        </ul>
                    </div>
                </>
                :
                <>
                    <li><Link to='/SignUp'>SignUp</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }

        <div className="form-control mt-2">
            <label className="label cursor-pointer">
            </label>
        </div>
    </React.Fragment>;


    return (
        <div>
            <div className="navbar font-semibold bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-500 flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {manuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl normal-case">DocService</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {manuItems}
                    </ul>
                </div>

                <label htmlFor="deshboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>


            </div>
        </div>
    );
};

export default Navbar;