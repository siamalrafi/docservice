import React from 'react';

const Review = ({ review }) => {
    const { name, img, review: userReview, location } = review;

    return (
        <div className="card border-4 border-blue-500 gap-5 shadow-xl">
            <div className="card-body">
                <p>{userReview}</p>
                <div className="flex items-center mt-6">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg">{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;