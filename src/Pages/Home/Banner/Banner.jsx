import React from 'react';
import { Link } from 'react-router-dom';
import Picture from '../../../../src/assets/picture.png';

const Banner = () => {
    return (
        <div className="hero py-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Picture} className="rounded-lg lg:w-1/2 md:w-full shadow-2xl" alt='' />
                <div className='lg:px-5 md:px-5 text-justify'>
                    <h1 className='font-bold'>Hello We Are</h1>
                    <h1 className="text-4xl text-indigo-500 pt-1 font-bold pb-5">DocService.</h1>
                    <p>You came to the right place. Get support for stress, family issues, life balance  from your home.</p>
                    <p>Consulting a healthcare professional, buying medicine, ordering lab tests and improving your health and wellbeing, all can be done 24/7 with DocTime!</p>

                    <div className='my-5 text-center font-bold flex gap-2'>
                        <Link to='/login'>
                            <button className="btn normal-case text-white hover:bg-indigo-600 bg-indigo-600 rounded-full">
                                <span className='ml-2'>
                                    Get Free Consolation
                                </span>
                            </button>
                        </Link>

                        <Link to='/services'>
                            <button className="btn normal-case btn-outline text-primary hover:bg-indigo-600 rounded-full">
                                <span className='ml-2'>
                                    Book a Schedule
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;