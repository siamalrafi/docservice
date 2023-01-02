import React from 'react';

const Skill1 = ({ mySkill }) => {
    const { name, institute, duration, img } = mySkill;

    return (
        <div>
            <div className='my-5 flex justify-items-center justify-between' >
                <div className='px-5'>
                    <h1 className='text-black font-semibold'>{name}</h1>
                    <p>{institute}</p>
                    <p className='text-gray-900'>{duration}</p>
                </div>
                <div>
                    <div className="avatar">
                        <div className="w-24 rounded  ">
                            <img src={img} alt='img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill1;