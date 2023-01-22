import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/LoadingPage/LoadingPage';
import AppointmentOption from '../AvailableAppointments/AppointmentOption'
import BookingModal from './BookingModal';


const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const { data: appointmentOptions = [], isLoading, refetch } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`https://doc-service-server-mocha.vercel.app/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    };

    console.log(appointmentOptions);


    return (
        <div>
            <section className='my-10'>
                <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>

                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                    {
                        appointmentOptions?.map(option => <AppointmentOption
                            key={option._id}
                            appointmentOption={option}
                            setTreatment={setTreatment}
                        ></AppointmentOption>)
                    }
                </div>

                {
                    treatment &&
                    <BookingModal
                        refetch={refetch}
                        treatment={treatment}
                        selectedDate={selectedDate}
                        setTreatment={setTreatment}
                    >
                    </BookingModal>
                }

            </section >
        </div >
    );
};

export default AvailableAppointments;