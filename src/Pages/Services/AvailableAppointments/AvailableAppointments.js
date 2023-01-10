import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/LoadingPage/LoadingPage';
import AppointmentOption from '../AvailableAppointments/AppointmentOption'
import BookingModal from './BookingModal';


const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);



    const { data: appointmentOptions = [], isLoading, refetch } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async () => {
            const res = await fetch(`/appointmentOptions.json`)
            const data = await res.json();
            return data
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    };


    return (
        <div>
            <section className='my-10'>
                <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>

                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                    {
                        appointmentOptions.map(option => <AppointmentOption
                            key={option._id}
                            appointmentOption={option}
                            setTreatment={setTreatment}
                        ></AppointmentOption>)
                    }
                </div>

                {
                    treatment &&
                    <BookingModal
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