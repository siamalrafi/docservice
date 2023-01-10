import { format } from 'date-fns';
import React from 'react';

const BookingModal = () => {
    // treatment is just another name of appointmentOptions with name, slots, _id
    /*  const { name, slots } = treatment;
     const date = format(selectedDate, 'PP');
 
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
         }
 
         // TODO: send data to the server
         // and once data is saved then close the modal 
         // and display success toast
         console.log(booking);
         setTreatment(null);
     } */

    return (

        <>

            <div>
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;