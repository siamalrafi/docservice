import React, { useEffect, useState } from 'react';
import Medical from '../../assets/skills/Medical.png';
import Consultant from '../../assets/skills/Consultant.png';
import Physiologist from '../../assets/skills/Physiologist.png';
import img1 from '../../assets/skills/img1.png';
import img2 from '../../assets/skills/img2.png';
import img3 from '../../assets/skills/img3.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@tanstack/react-query';


const Services = () => {

    const { data: services = [], isLoading, refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch(`services.json`)
            const data = await res.json();
            return data
        }
    });

    if(isLoading){
        return <h1>Loading ..........</h1>
    }

    return (
        <div>
            <div className='my-10'>
                <h1 className='text-center text-indigo-500 font-semibold'>OUR SERVICES</h1>
                <h1 className='text-3xl text-center text-indigo-500 font-bold mb-3'>
                    Services We Provide.</h1>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-2 px-5'>
                {
                    services.map((service, i) =>
                        <Link key={i} to={`/services/${service.name}`}>
                            <div className='group grid justify-items-start hover:scale-125 transition duration-500 ease-in-out'>
                                <figure className="px-10 pt-10">
                                    <img src={service.img} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{service.name}</h2>
                                    <p>{service.description}</p>
                                    <p className='hidden text-2xl group-hover:block'>
                                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                                    </p>
                                </div>
                            </div>
                        </Link>

                    )
                }
            </div>
        </div>
    );
};

export default Services;