import React from 'react';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import HeroSection from '../HeroSection/HeroSection';
import MoreAboutUs from '../MoreAboutUs/MoreAboutUs';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <FeaturedProducts></FeaturedProducts>
            <Reviews></Reviews>
            <MoreAboutUs></MoreAboutUs>
        </div>
    );
};

export default Home;