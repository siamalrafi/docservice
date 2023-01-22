import React from 'react';
import doctor from '../../../assets/images/doctor.png';


const MakeAppointment = () => {
    return (
        <div>
            <section className='mt-16 bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-500'>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={doctor} alt="" className="-mt-32 hidden md:block lg:w-1/2 rounded-lg shadow-2xl" />
                        <div>
                            <h4 className='text-primary font-bold text-2xl'>Appointment</h4>
                            <h1 className=" text-black text-4xl font-bold">Make an appointment Today</h1>
                            <p className="text-black py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                Make Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MakeAppointment;