import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({selectedDate}) => {
    return (
        <div>
            <h1>AvailableAppointments
                AvailableAppointments</h1>
            <section className='my-10'>
                <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            </section >
        </div>
    );
};

export default AvailableAppointments;