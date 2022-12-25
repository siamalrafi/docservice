import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards'
import Trusted from './Trusted/Trusted';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Trusted></Trusted>
            <InfoCards></InfoCards>

        </div>
    );
};

export default Home;