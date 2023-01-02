import React from 'react';
import exceptional from '../../../assets/images/Exceptional.png';


const Exceptional = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-3xl text-indigo-500 font-bold mt-5'>Exceptional Service Care.</h1>
                <p>Exceptional Services only for Special Person.</p>
            </div>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center py-10 px-5'>

                <figure className="lg:pl-10 md:pl-10 border-2 rounded border-indigo-500">
                    <img src={exceptional} alt="Shoes" className="rounded-xl w-96" />
                </figure>

                <div>
                    <h1 className='text-2xl text-justify text-black py-2'> Exceptional Service Care, on Your Terms</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
          
          
                    <div className='pl-5 py-5'>
                        <button className="btn btn-active text-center btn-primary">Get Started</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Exceptional;