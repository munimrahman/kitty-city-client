import React from 'react';

const HeroSection = () => {
    return (
        <div className="row container mx-auto align-items-center my-5">
            <div className="col-12 col-md-6">
                <h1>This is Her Section</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi.</p>
                <button className="btn btn-primary">Learn More</button>
            </div>
            <div className="col-12 col-md-6 text-center">
                <img src="https://place-hold.it/300x300" alt="" />
            </div>
        </div>
    );
};

export default HeroSection;