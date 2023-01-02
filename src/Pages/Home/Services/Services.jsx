import React from 'react';
import Medical from '../../../assets/skills/Medical.png';
import Consultant from '../../../assets/skills/Consultant.png';
import Physiologist from '../../../assets/skills/Physiologist.png';
import img1 from '../../../assets/skills/img1.png';
import img2 from '../../../assets/skills/img2.png';
import img3 from '../../../assets/skills/img3.png';


const Services = () => {

    const services = [
        {
            name: 'Medical',
            description: 'The Doctor of Medicine (M.D.) degree is a five-year graduate program intended to teach students the essentials of being a Medical Doctor.',
            img: Medical
        },
        {
            name: 'Consultant',
            description: 'A consultant physician is a senior doctor who practises in one of the medical specialties. Once specialty training has been completed.',
            img: Consultant
        },
        {
            name: 'Physiologist',
            description: 'Physiologists are highly trained medical scientists with a master degree or doctoral degree.With zeal and expertise in studying how humans.',
            img: Physiologist
        },
        {
            name: 'Surgical ', description: 'The surgeon is responsible for the preoperative diagnosis of the patient, for performing the operation, and for providing the patient with postoperative surgical care and treatment.',
            img: img1
        },
        {
            name: 'Psychiatrist ', description: 'A psychiatrist is a physician who specializes in psychiatry, the branch of medicine devoted to the diagnosis, prevention, study, and treatment of mental disorders.',
            img: img3
        },
        {
            name: 'Therapist', description: 'A therapist is a licensed counselor or psychologist who can use talk therapy to help you treat mental health symptoms and improve how you manage stress and relationships.',
            img: img2
        },

    ];


    return (
        <div>
            <div>
                <h1 className='text-center text-indigo-500 font-semibold'>OUR SERVICES</h1>
                <h1 className='text-3xl text-center text-indigo-500 font-bold mb-3'>
                    Services We Provide.</h1>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-2 px-5'>
                {
                    services.map((service,i) =>
                        <div key={i} className='grid justify-items-start  hover:scale-125 transition duration-500 ease-in-out'>
                            <figure className="px-10 pt-10">
                                <img src={service.img} alt="Shoes" className="rounded-xl" />
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