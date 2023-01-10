import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');

    // Show Service Name
    const segment_str = window.location.pathname;
    const segment_array = segment_str.split('/');
    const last_segment = segment_array.pop();

    console.log(last_segment);

    const handleBooking = event => {
        event.preventDefault();

        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone,
        };

        console.log(booking);

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        console.log(booking);
        setTreatment(null);
    }





    return (

        <>
            <div>
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-2xl font-bold text-center">{last_segment}</h3>
                        <h3 className="text-lg font-bold">{name}</h3>
                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                            <input type="text" disabled value={date} className="input w-full input-bordered " />
                            <select name="slot" className="select select-bordered w-full">
                                {
                                    slots.map((slot, i) => <option
                                        value={slot}
                                        key={i}
                                    >{slot}</option>)
                                }
                            </select>
                            <input name="name" type="text" placeholder="Your Name" className="input w-full input-bordered" />
                            <input name="email" type="email" placeholder="Email Address" className="input w-full input-bordered" />
                            <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                            <br />
                            <input className='btn btn-accent w-full' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>



            </div>
        </>
    );
};

export default BookingModal;