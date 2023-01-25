import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../../Pages/Shared/LoadingPage/LoadingPage'


const Services = () => {

    const { data: services = [], isLoading, refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch(`https://doc-service-server-mocha.vercel.app/services`)
            const data = await res.json();
            return data
        }
    });

    if (isLoading) {
        return <LoadingPage></LoadingPage>
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