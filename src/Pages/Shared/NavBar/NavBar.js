import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useCart from '../../../hooks/useCart';
import kittyCity from '../../../images/kitty-city.png'
import './NavBar.css'
import avatar from '../../../images/avatar.jpg'

const NavBar = () => {
    const { user, logOut } = useAuth();
    const cartProducts = useCart();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light py-0 px-5">
                <div className="container-fluid">
                    <Link className="navbar-brand py-0" to="/">
                        <img src={kittyCity} className="img-fluid" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-us">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">
                                    <button type="button" className="btn px-0 shadow-none position-relative">
                                        <i className="fas fa-shopping-cart"></i>
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            {cartProducts?.length}
                                            <span className="visually-hidden">total item</span>
                                        </span>
                                    </button>
                                </Link>

                            </li>
                            {user?.email && <li className="nav-item dropdown fw-bold">
                                <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={avatar} className="userImg me-2" alt="" />
                                    {user?.displayName}
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className="d-flex flex-column align-items-center justify-content-center">
                                        <div className="w-25">
                                            <img src={avatar} alt="" className="img-fluid userImgDropDown" />
                                        </div>
                                        <p className="my-2">{user?.displayName}</p>
                                        <Link to="/dashboard" className="btn btn-danger rounded-pill px-4 py-2 shadow-none">Dashboard</Link>
                                    </li>
                                    <hr className="w-75 mx-auto" />
                                    <li>
                                        <Link className="dropdown-item" to="/">Track My Orders</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">My Wishlist</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">My Reviews</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">My Returns & Cancellations</Link>
                                    </li>
                                    <li className="text-center">
                                        <button onClick={logOut} className="btn btn-danger rounded-pill px-4 py-2 shadow-none">Sign Out</button>
                                    </li>
                                </ul>
                            </li>}
                            {!user?.email && <div className="d-flex">
                                <li className="nav-item mx-2">
                                    <Link className="nav-link btn btn-outline-danger rounded-pill shadow-none px-3 fw-bold hover-color" to="/sign-in">Sign In</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link btn btn-danger px-3 rounded-pill shadow-none fw-bold text-white" to="/sign-up">Sign Up</Link>
                                </li>
                            </div>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;