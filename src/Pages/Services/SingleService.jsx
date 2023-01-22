import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { DayPicker } from 'react-day-picker';
import appointment from '../../assets/images/appointment.png';
import { format } from 'date-fns';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';


const SingleService = () => {
    const data = useLoaderData();
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <div className='bg-base-200'>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={appointment} alt='appointment' className="rounded-lg h-80 w-80 shadow-2xl" />
                        <div>
                            <DayPicker
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate} />
                            <p>you selected {format(selectedDate, 'PP')}</p>

                        </div>
                    </div>
                </div>

                <AvailableAppointments
                    selectedDate={selectedDate}
                >
                </AvailableAppointments>
            </div>
        </div>

    );
};

export default SingleService;