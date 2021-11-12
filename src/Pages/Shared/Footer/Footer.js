import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/kitty-city.png'
import './Footer.css'
import ins1 from '../../../images/ins2.jpg'

const Footer = () => {
    return (
        <footer>
            <div className="footer-main">
                <div className="footer-subs align-items-center py-4">
                    <div className="text-center">
                        <h3 className="text-white">Subscribe to Newslatter</h3>
                    </div>
                    <div className="w-50 mx-auto my-3">
                        <input type="email" name="email" placeholder="youer email" className="form-control shadow-none" id="" />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-danger">Subscribe</button>
                    </div>
                </div>
                <div className="container mx-auto justify-content-center pb-5 pt-3 row footer-bg">
                    <div className="py-2 col-12 col-md-3">
                        <img src={logo} className="img-fluid" alt="" />
                        <p className="mt-3">Kitty City is an online pet shop for your loving pets. Our doors opened for the first time on February 6, 2015 and we have been growing ever since.</p>
                    </div>
                    <div className="py-2 col-12 col-md-3">
                        <h4 className="fw-bold pb-3 footer-title-color">Useful links</h4>
                        <ul className="lh-lg list-unstyled text-decoration-underline">
                            <li>How it works</li>
                            <li>About Us</li>
                            <li>Babysitters</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="py-2 col-12 col-md-3">
                        <h4 className="fw-bold pb-3 footer-title-color">My account</h4>
                        <ul className="lh-lg list-unstyled text-decoration-underline">
                            <li>Track My Order</li>
                            <li>Terms of use</li>
                            <li>Wishlist</li>
                            <li>Submit your feedback</li>
                        </ul>
                    </div>
                    <div className="py-2 col-12 col-md-3">
                        <h4 className="fw-bold pb-3 footer-title-color">Instagram</h4>
                        <div className="row justify-content-center">
                            <div className="col-4 py-1">
                                <img src={ins1} className="img-fluid" alt="" />
                            </div>
                            <div className="col-4 py-1">
                                <img src={ins1} className="img-fluid" alt="" />
                            </div>
                            <div className="col-4 py-1">
                                <img src={ins1} className="img-fluid" alt="" />
                            </div>
                            <div className="col-4 py-1">
                                <img src={ins1} className="img-fluid" alt="" />
                            </div>
                            <div className="col-4 py-1">
                                <img src={ins1} className="img-fluid" alt="" />
                            </div>
                            <div className="col-4 py-1">
                                <img src={ins1} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark py-3 text-color-gray text-center">
                <Link className="icon-color p-3" to="/">Privacy</Link>
                <Link className="icon-color p-3" to="/">Terms</Link>
                <Link className="icon-color p-3" to="/">Sitemap</Link>
                <br />
                <small className="text-white">Copyright © 2021 Kitty City. All Right Reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;