import React from 'react';

const Services = () => {

    const services = [
        {
            name: 'Medical',
            description: 'The Doctor of Medicine (M.D.) degree is a five-year graduate program intended to teach students the essentials of being a Medical Doctor..',
            img: 'img'
        },
        {
            name: 'Consultant',
            description: 'A consultant physician is a senior doctor who practises in one of the medical specialties. Once specialty training has been completed.',
            img: 'img'
        },
        {
            name: 'Physiologist',
            description: 'Physiologists are highly trained medical scientists with a master degree or doctoral degree.With zeal and expertise in studying how humans',
            img: 'img'
        },
        {
            name: 'Physiologist', description: 'Physiologists are highly trained medical scientists with a master degree or doctoral degree.With zeal and expertise in studying how humans',
            img: 'img'
        },
        {
            name: 'Physiologist', description: 'Physiologists are highly trained medical scientists with a master degree or doctoral degree.With zeal and expertise in studying how humans',
            img: 'img'
        },
    ]
    return (
        <div>
            <div>
                <h1 className='text-center text-indigo-500 font-sans'>OUR SERVICES</h1>
                <h1 className='text-3xl text-center text-indigo-500 font-bold mb-3'>
                    Services We Provide.</h1>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-3 px-5'>
                {
                    services.map((service) =>
                        <div className='grid justify-items-start  hover:scale-125 transition duration-300 ease-in-out'>
                            <figure className="px-10 pt-10">
                                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{service.name}</h2>
                                <p>{service.description}</p>
                            </div>
                        </div>

                    )
                }


            </div>



        </div>
    );
};

export default Services;