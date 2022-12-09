import React from 'react';
import AboutMe from '../Other/AboutMe';
import Banner from '../Other/Banner';
import Projects from '../Other/Projects';
import Services from '../Other/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Services></Services>

        </div>
    );
};

export default Home;