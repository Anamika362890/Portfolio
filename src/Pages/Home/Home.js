import React from 'react';
import AboutMe from '../Other/AboutMe';
import Banner from '../Other/Banner';
import Contact from '../Other/Contact';
import Projects from '../Other/Projects/Projects';

import Services from '../Other/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Services></Services>
            <Contact></Contact>

        </div>
    );
};

export default Home;