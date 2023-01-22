import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/LoadingPage/LoadingPage';

const Blog = () => {

    const { data: blogs = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://doc-service-server-mocha.vercel.app/blogs');
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Make history
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="84d09fa9-a544-44bd-88b2-08fdf4cddd38"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">Let's</span>
                        </span>{' '}
                        Learn .....
                    </h2>
                    <p className="text-base text-gray-700 md:text-md">
                        Consulting a healthcare professional, buying medicine, ordering lab tests and improving your health and wellbeing, all can be done 24/7 with DocTime!
                    </p>
                </div>


                {/* Out all Blog is Here. */}

                <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
                    {
                        blogs?.map((blog, i) => <Link to={`/blogs/${blog._id}`} key={i}>
                            <div className="p-5 duration-300 transform bg-white border-2 border-purple-400 rounded shadow-sm border-deep-purple-accent-100 hover:-translate-y-2">
                                <div className="flex items-center mb-2">
                                    <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
                                        1
                                    </p>
                                    <p className="text-lg font-bold leading-5">{blog?.title}</p>
                                </div>
                                <p className="text-sm text-gray-900">
                                    {blog?.discription.slice(12, 80)}....
                                </p>
                            </div>
                        </Link>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Blog;