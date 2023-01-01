import React from 'react';
import Skill1 from './Skill1';
import Skill2 from './Skill2';

const MySkills = () => {

    const mySkills1 = [
        {
            name: 'Medical Officer',
            institute: 'Maulana Azad Medical College',
            duration: '2020-present',
        },
        {
            name: 'Consultant',
            institute: 'Kasturba medical college',
            duration: '2008-2010',
        }
    ];
    const mySkills2 = [
        {
            name: 'Head of Medical',
            institute: 'Madras Medical College',
            duration: '2006-2010',
        },
        {
            name: 'Physiologist',
            institute: 'Grant Medical College',
            duration: '2009-2011',
        }
    ];



    return (
        <div>
            <div className='text-center mt-16 lg:mx-40 mx-10'>
                <h1 className='text-3xl text-black font-bold mb-5'>My Skills and Experience.</h1>
                <p>A large part of being a doctor involves problem-solving and thinking critically to find solutions for your patients. Doctors use these skills to assess symptoms, diagnose conditions and develop a treatment regimen for those in their care</p>
            </div>

            <div>








                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center px-16'>


                    <div>
                        {/*   <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div> */}

                        {
                            mySkills1?.map((mySkill) => <Skill1 mySkill={mySkill}></Skill1>)
                        }
                    </div>

                    <div>
                        {/* 
                        */}
                        {
                            mySkills2?.map((mySkill) => <Skill2 mySkill={mySkill}></Skill2>)
                        }

                    </div>
                </div>






            </div>


        </div >
    );
};

export default MySkills;