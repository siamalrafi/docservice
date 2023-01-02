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
                            Focus me to see content
                        </div>
                        <div className="collapse-content">
                            <p tabIndex={0}>
                                attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={1} className="collapse collapse-plus border border-indigo-500 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div className="collapse-content">
                            <p tabIndex={1}>
                                attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={2} className="collapse my-5 collapse-plus border border-indigo-500 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div className="collapse-content">
                            <p tabIndex={2}>
                                attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={3} className="collapse my-5 collapse-plus border border-indigo-500 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div className="collapse-content">
                            <p tabIndex={3}>
                                attribute is necessary to make the div focusable</p>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default Treatment;