import { faDashboard, faGear, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useEffect } from 'react';

const Navbar = () => {
    const { user, logOut, handleDark } = useContext(AuthContext);

    const [theme, setTheme] = useState('light');


    const [isDarkMode, setDarkMode] = React.useState(false);
    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
    };

    useEffect(() => {
        const themes = document.getElementsByTagName('body');
        themes[0].setAttribute("data-theme", theme)
        console.log(theme);
    }, [theme])



    const manuItems = <React.Fragment>

        {
            theme === 'light' ?
                <button onClick={() => setTheme('black')}>
                    <img src="https://img.icons8.com/ios-filled/50/null/moon-symbol.png" /></button>
                :
                <>
                    <button onClick={() => setTheme('light')}>
                        <img src="https://img.icons8.com/ios/50/null/light-on--v1.png" />
                    </button>
                </>
        }


        {/* <DarkModeSwitch
            style={{ marginBottom: '0px' }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={50}
        /> */}
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
                                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li>
                                <span>
                                    <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                                    Settings
                                </span></li>

                            <li onClick={logOut}>

                                <span>
                                    <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon>
                                    Logout</span></li>
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
    </React.Fragment >;

    return (
        <div>
            <div className="navbar font-semibold bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-500 flex justify-between">
                <div className="flex-1">

                    {/* Dashboard Icon */}
                    <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <FontAwesomeIcon title='OpenDashboard' className='text-3xl' icon={faDashboard}></FontAwesomeIcon>
                    </label>
                    <Link to='/' className="btn btn-ghost text-xl normal-case">DocService</Link>

                </div>

                <div className="flex-none">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {manuItems}
                        </ul>
                    </div>

                    <div className="dropdown dropdown-end btn-ghost lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className=" bg-base-100 dropdown-content menu p-2 shadow rounded-box w-52">
                            {manuItems}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;