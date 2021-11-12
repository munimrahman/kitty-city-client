import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css'
import herImg from '../../../images/hero-img-1.png'
import woah from '../../../images/woah.png'
import dogClothe from '../../../images/dog-clothe.png'

const HeroSection = () => {
    return (
        <div className="hero-bg">
            <div className="row container mx-auto align-items-center py-5 woah-bg ">
                <div className="col-12 col-md-6">
                    <p className="mb-0 fw-bold">HIGH-QUALITY PRODUCT FOR YOUR PET</p>
                    <h1 className="text-danger">4 Pack Small Dog Clothes</h1>
                    <p className="text-end pe-5 text-danger fw-bold">only $39.99</p>
                    <img src={dogClothe} className="w-50" alt="" /> <br />
                    <Link to="/shop">
                        <button className="btn btn-danger rounded-pill shadow-none mt-4 py-2 px-4">Explore More</button>
                    </Link>
                </div>
                <div className="col-12 col-md-6 text-center">
                    <img src={herImg} className="img-fluid" alt="" />
                    {/* <img src={woah} className="img-fluid woah-position" alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;