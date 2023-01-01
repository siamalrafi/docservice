import React from 'react';

const Skill2 = ({ mySkill }) => {
    const { name, institute, duration } = mySkill;

    return (
        <div>
             <div className='flex flex-row-reverse justify-between' >
                <div>
                    <h1>{name}</h1>
                    <p>{institute}</p>
                    <p>{duration}</p>

                </div>
                <div>
                    <div className="avatar">
                        <div className="w-24 mask mask-hexagon">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skill2;