import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { DayPicker } from 'react-day-picker';
import appointment from '../../assets/images/appointment.png';


const Services = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const data = useLoaderData();
    console.log(data);
    return (

        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={appointment} alt='appointment' className="rounded-lg h-80 w-80 shadow-2xl" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate} />
                </div>
            </div>
        </div>

    );
};

export default Services;