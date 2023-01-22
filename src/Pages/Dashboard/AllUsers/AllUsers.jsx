import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/LoadingPage/LoadingPage';

const AllUsers = () => {
    const [deletingUser, setDeletingUser] = useState(null);

    const closeModal = () => {
        setDeletingUser(null);
    }


    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://doc-service-server-mocha.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });


    const handleMakeAdmin = (id) => {
        fetch(`https://doc-service-server-mocha.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful.')
                    refetch();
                }
            })
    };


    const handleDeleteBooking = user => {
        fetch(`https://doc-service-server-mocha.vercel.app/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`User deleted successfully`)
                }
            });
    };

    if (isLoading) {
        return <Loading></Loading>
    };

    return (
        <div>
            <h2 className="text-3xl text-center my-4">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                <td>
                                    <label onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal" className="text-center btn btn-circle btn-outline btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </label>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            {
                deletingUser && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete. It cannot be undone.`}
                    successAction={handleDeleteBooking}
                    successButtonName="Delete"
                    modalData={deletingUser}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default AllUsers;