import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards'
import Trusted from './Trusted/Trusted';
import MySkills from './MySkills/MySkills';
import Treatment from './Treatment/Treatment';
import Services from './Services/Services';
import Exceptional from './Exceptional/Exceptional';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonial from './Testimonial/Testimonial';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Trusted></Trusted>
            <InfoCards></InfoCards>
            <MySkills></MySkills>
            <Treatment></Treatment>
            <Services></Services>
            <Exceptional></Exceptional>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>










        </div>
    );
};

export default Home;