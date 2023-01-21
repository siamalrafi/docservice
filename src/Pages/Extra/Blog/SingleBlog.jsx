import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBlog = () => {
    const blog = useLoaderData([]);
    console.log(blog.title);
    return (
        <div>
            <div className="card bg-base-100 ">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    {blog}

                </div>
            </div>
        </div>
    );
};

export default SingleBlog;