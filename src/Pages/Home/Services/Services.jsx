import React from 'react';

const Services = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-indigo-500 font-sans'>OUR SERVICES</h1>
                <h1 className='text-3xl text-center text-indigo-500 font-bold mb-3'>
                    Services We Provide.</h1>

            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center'>


                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>


            </div>



        </div>
    );
};

export default Services;