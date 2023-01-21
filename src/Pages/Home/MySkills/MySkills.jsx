import React from 'react';
import Skill1 from './Skill1';
import Skill2 from './Skill2';
import Medical from '../../../assets/skills/Medical.png'
import Consultant from '../../../assets/skills/Consultant.png'
import Head from '../../../assets/skills/Head.png'
import Physiologist from '../../../assets/skills/Physiologist.png'

const MySkills = () => {

    const mySkills1 = [
        {
            name: 'Medical Officer',
            institute: 'Maulana Azad Medical College',
            duration: '2020-present',
            img: Medical
        },
        {
            name: 'Consultant',
            institute: 'Kasturba medical college',
            duration: '2008-2010',
            img: Consultant

        }
    ];
    const mySkills2 = [
        {
            name: 'Head of Medical',
            institute: 'Madras Medical College',
            duration: '2006-2010',
            img: Head

        },
        {
            name: 'Physiologist',
            institute: 'Grant Medical College',
            duration: '2009-2011',
            img: Physiologist
        }
    ];



    return (
        <div>
            <div className='text-center mt-14 lg:mx-40 mx-10'>
                <h1 className='text-3xl text-indigo-500 font-bold mb-3'>Our Skills and Experience.</h1>
                <p>A large part of being a doctor involves problem-solving and thinking critically to find solutions for your patients. Doctors use these skills to assess symptoms, diagnose conditions and develop a treatment regimen for those in their care</p>
            </div>


            <div>
                <div className='mt-10 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center lg:mx-40 md:mx-30'>

                    <div>
                        {
                            mySkills1?.map((mySkill, i) => <Skill1 key={i} mySkill={mySkill}></Skill1>)
                        }
                    </div>

                    <div>
                        {
                            mySkills2?.map((mySkill, i) => <Skill2 key={i} mySkill={mySkill}></Skill2>)
                        }
                    </div>
                </div>






            </div>


        </div >
    );
};

export default MySkills;