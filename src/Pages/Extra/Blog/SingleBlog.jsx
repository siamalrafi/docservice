import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBlog = () => {
    const blog = useLoaderData([]);
    const { title, discription } = blog;

    return (
        <div>
            <div className="card bg-base-100 ">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-semibold">{title}!</h2>
                    <p>{discription}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;