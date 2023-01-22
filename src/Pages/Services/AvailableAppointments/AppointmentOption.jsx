import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, price, doctorsImg, slots } = appointmentOption;

    return (
        <>
            <div className="card shadow-xl  ">
                <div className="avatar justify-center">
                    <div className="w-28 mask mask-hexagon">
                        <img src={doctorsImg} alt='doctors-img' />
                    </div>
                </div>

                <div className="card-body text-center">
                    <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                    <p>{slots?.length > 0 ? slots[0] : 'Try Another day'}</p>
                    <p>{slots?.length} {slots?.length > 1 ? 'spaces' : 'space'} available</p>
                    <p>Price: {price}$</p>
                    <div className="card-actions justify-center">
                        <label
                            disabled={slots?.length === 0}
                            htmlFor="booking-modal"
                            className="btn bg-gradient-to-r from-red-900 to-red-600 text-white"
                            onClick={() => setTreatment(appointmentOption)}
                        >Book Appointment</label>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AppointmentOption;