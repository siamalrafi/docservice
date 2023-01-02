import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards'
import Trusted from './Trusted/Trusted';
import MySkills from './MySkills/MySkills';
import Treatment from './Treatment/Treatment';
import Services from './Services/Services';
import Exceptional from './Exceptional/Exceptional';

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




        </div>
    );
};

export default Home;