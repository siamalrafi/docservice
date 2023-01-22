import React from 'react';
import treatment from '../../../assets/images/treatment.png';


const Treatment = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-300 '>
            <div className="my-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center container px-3  ">

                <div className='text-center'>
                    <h1 className="text-3xl justify-start pt-5 pb-5 font-bold">What Kind Of
                        <br />
                        Treatment I Provide.</h1>
                    <div className="avatar">
                        <div className="w-44 mask mask-hexagon">
                            <img src={treatment} alt='treatment' />
                        </div>
                    </div>
                </div>

                <div>
                    <div tabIndex={0} className="collapse my-5 collapse-plus border border-indigo-500 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What do we treat?
                        </div>
                        <div className="collapse-content">
                            <p tabIndex={0}>
                                Common health issue Ask anything you would normally ask your GP. You can have an instant video with one of our GPs via a digital consultation from anywhere, at any time of day. Specialist advice Sometimes it's helpful to see a specialist when you want. And get educational advice, pre-screening, monitoring and follow-ups.</p>
                        </div>
                    </div>

                    <div tabIndex={1} className="collapse collapse-plus border border-indigo-500 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            How does it work?
                        </div>
                        <div className="collapse-content">
                            <p tabIndex={1}>
                                You can register on our App and access several medical services easily. The basic video consultation service is straightforward: search for your relevant doctor with easy filters, talk to your doctor directly as included in your DocTime healthcare package or pay just prior the on-demand consultation starts. Then access your prescription uploaded by the doctor and you can order medicine or tests as recommended</p>
                        </div>
                    </div>

                    <div tabIndex={2} className="collapse my-5 collapse-plus border border-indigo-500 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Who provides consultation on DocService?
                        </div>
                        <div className="collapse-content">
                            <p tabIndex={2}>
                                Only certified MBBS doctors can provide consultation via the DocTime app.
                            </p>
                        </div>
                    </div>
                    <div tabIndex={3} className="collapse my-5 collapse-plus border border-indigo-500 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            When are the doctors available for consultation?
                        </div>
                        <div className="collapse-content">
                            <p tabIndex={3}>
                                Doctors are available according to their time availability. Our platform is available 24/7. Any doctor can come online at any time if they want.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;