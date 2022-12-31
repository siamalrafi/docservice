import React from 'react';
import Skill1 from './Skill1';
import Skill from './Skill1';
import Skill2 from './Skill2';

const MySkills = () => {

    const mySkills = [
        {
            name: 'my-skill',
            institute: 'mmbs',
            duration: '3000-present',
        },
        {
            name: 'my-skill',
            institute: 'mmbs',
            duration: '3000-present',
        }
    ];



    return (
        <div>
            <div className='text-center mt-16 lg:mx-40 mx-10'>
                <h1 className='text-3xl text-black font-bold mb-5'>My Skills and Experience.</h1>
                <p>A large part of being a doctor involves problem-solving and thinking critically to find solutions for your patients. Doctors use these skills to assess symptoms, diagnose conditions and develop a treatment regimen for those in their care</p>
            </div>

            <div className='flex mt-10 gap-5 px-8 justify-center'>

                <div>
                    <div>
                        {mySkills?.map(mySkill => <Skill1></Skill1>)
                        }
                    </div>
                </div>
                <div>
                    <div>
                        {mySkills?.map(mySkill => <Skill2></Skill2>)
                        }
                    </div>
                </div>
            </div>





        </div >
    );
};

export default MySkills;