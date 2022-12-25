import React from 'react';
import Picture from '../../../../src/assist/picture.png';

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Picture} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div className='lg:px-10'>
                    <h1 className='font-bold'>Hello I'm</h1>
                    <h1 className="text-4xl pt-1 font-bold pb-5">Dr. Adam Smith.</h1>
                    <p>You came to the right place. Get support for stress, family issues, life balance  from your home.</p>
                    <p>Consulting a healthcare professional, buying medicine, ordering lab tests and improving your health and wellbeing, all can be done 24/7 with DocTime!</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;