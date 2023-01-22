import React from 'react';
import mission from '../../../assets/images/mission.png';
import vision from '../../../assets/images/vision.png';

const About = () => {
    return (
        <div className='container'>
            <h1 className='text-5xl my-5 text-center  font-bold'>About us</h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                <div className="card  bg-base-100 rounded-md ">
                    <figure><img src={mission} className='rounded-lg image-full' alt="Shoes" /></figure>
                </div>
                <div className="card  bg-base-100 rounded-md ">
                    <figure><img src={vision} className='rounded-lg' alt="Shoes" /></figure>
                </div>
            </div>

            <p className='my-6 px-10'>DocService is an online medical service targeting emerging markets that are rapidly digitising. Our mission is to improve the health and wellbeing of the populations we serve. We have developed accessible and affordable telehealth services that aims to support the public health system, research and clinical trials. </p>

            <p className='px-10'>DocService offers on-demand GP and specialist consultations with verified and certified doctors, online prescriptions, medicine delivery, pathology/ diagnostics tests, all while building valuable Electronic Health Records</p>

            <p className='my-6 px-10'>DocService is vertically integrated with pharmacies/ medicine delivery suppliers, labs/ diagnostics centres, and payment providers for an end-to-end digital health experience</p>

            <p className='px-10'>DocService systematically focuses on expanding access to affordable healthcare services to all. We promise to improve our solutions continuously through our scalable technology and data analytics capabilities. Our passionate team is committed to excellence and work extremely hard to ensure we make a positive contribution to the healthcare of the future</p>

        </div>
    );
};

export default About;