import React from 'react';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import HeroSection from '../HeroSection/HeroSection';
import HomeInfo from '../HomeInfo/HomeInfo';
import MoreAboutUs from '../MoreAboutUs/MoreAboutUs';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <HomeInfo></HomeInfo>
            <FeaturedProducts></FeaturedProducts>
            <Reviews></Reviews>
            <MoreAboutUs></MoreAboutUs>
        </div>
    );
};

export default Home;