import { format } from 'date-fns';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/UserContext';


const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { user } = useContext(AuthContext);

    const { name, price, slots } = treatment;

    const date = format(selectedDate, 'PP');

    // Show Service Name
    const segment_str = window.location.pathname;
    const segment_array = segment_str.split('/');
    const treatmentName = segment_array.pop();


    const handleBooking = event => {
        event.preventDefault();

        const segment_str = window.location.pathname;
        const segment_array = segment_str.split('/');
        const treatmentName = segment_array.pop();

        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatmentName: treatmentName,
            patientName: name,
            slot,
            email,
            phone,
            price,
        };


        fetch('https://doc-service-server-mocha.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking confirmed');
                    refetch();
                }
                else {
                    toast.error('Error! Please try again');
                }
            })

        setTreatment(null);
    };



    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold text-center">{treatmentName}</h3>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered " />
                        <select name="slot" className="select select-bordered w-full">
                            {
                                slots?.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name="name" defaultValue={user?.displayName} type="text" placeholder="Your Name" className="input w-full input-bordered" required />
                        <input name="email" defaultValue={user?.email} type="email" placeholder="Email Address" className="input w-full input-bordered" required />
                        <input name="phone" type="number" placeholder="Phone Number" className="input w-full input-bordered" required />
                        <br />
                        {
                            user?.email ?
                                <>
                                    <input className='btn bg-gradient-to-r from-indigo-600 to-pink-600 w-full' type="submit" value="Submit" />
                                </>
                                :
                                <>
                                    <Link className='btn bg-gradient-to-r from-fuchsia-600 to-pink-600 w-full' to='/login'>Login</Link>
                                </>
                        }
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;  