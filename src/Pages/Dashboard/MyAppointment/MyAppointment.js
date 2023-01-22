import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/UserContext';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/LoadingPage/LoadingPage';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const [deletingBooking, setDeletingBooking] = useState(null);

    const closeModal = () => {
        setDeletingBooking(null);
    }

    const url = `https://doc-service-server-mocha.vercel.app/bookings?email=${user?.email}`;
    const { data: bookings = [], isLoading, refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    // console.log(bookings);
    const handleDeleteBooking = booking => {
        fetch(`https://doc-service-server-mocha.vercel.app/booking/${booking._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Booking deleted successfully`)
                }
            });
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h3 className="text-3xl mb-5 text-center my-4">My Appointments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.patientName}</td>
                                <td>{booking.treatmentName}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                    }
                                </td>
                                <td>
                                    <label onClick={() => setDeletingBooking(booking)} htmlFor="confirmation-modal" className="text-center btn btn-circle btn-outline btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </label>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            {
                deletingBooking && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete. It cannot be undone.`}
                    successAction={handleDeleteBooking}
                    successButtonName="Delete"
                    modalData={deletingBooking}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default MyAppointment;