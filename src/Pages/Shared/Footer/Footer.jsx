import { faAppleAlt, faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <div>
            <footer
                style={{
                    background: `url(${footer})`,
                    backgroundSize: 'cover'
                }}
                className=" p-10">
                <div className='footer'>
                    <div>
                        <span className="text-gray-700 text-1xl font-extrabold">Services</span>
                        <Link to={'/services/Medical'} className="link link-hover">Medical</Link>
                        <Link to={'/services/Consultant'} className="link link-hover">Consultant</Link>
                        <Link to={'/services/Therapist'} className="link link-hover">Therapist</Link>
                        <Link to={'/services/Physiologist'} className="link link-hover">Physiologist</Link>
                    </div>
                    <div>
                        <span className=" text-gray-700 text-1xl font-extrabold">Company</span>
                        <Link to='/about' className="link link-hover">About us</Link>
                        <Link to='#contact' className="link link-hover">Contact</Link>
                        <Link className="link link-hover">Jobs</Link>
                        <Link className="link link-hover">Press kit</Link>
                    </div>
                    <div className="text-center ">
                        <h3 className="text-2xl font-bold mb-2 "> Download our app </h3>
                        <p className='text-2xl'> Stay fit. All day, every day. </p>
                        <div className="flex justify-center my-5">
                            <div className="bg-gray-700 flex items-center border rounded-lg px-4 py-2 mx-2">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt='google play' className="w-7 md:w-8" />

                                <div className="text-left ml-3">
                                    <p className="  text-white">Download on </p>
                                    <p className="  text-white"> Google Play Store </p>
                                </div>
                            </div>
                            <div className="flex bg-gray-700 items-center border rounded-lg px-4 py-2 mx-2">
                                <FontAwesomeIcon className='text-4xl text-white' icon={faAppleWhole}></FontAwesomeIcon>
                                <div className="text-left ml-3">
                                    <p className="text-white">Download on </p>
                                    <p className="text-white"> Apple Store </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-16 text-center'>
                    <p>Copyright © 2022 - All right reserved by RHD Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;