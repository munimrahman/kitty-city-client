import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useCart from '../../../hooks/useCart';

const NavBar = () => {
    const { user } = useAuth();
    const cartProducts = useCart();
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Kitty City</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/shop">Shop</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/blogs">Blog</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact-us">Contact Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/cart">Cart: {cartProducts?.length}</Link>
                            </li>
                            <li className="nav-item dropdown fw-bold">
                                <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://place-hold.it/50x50" className="user-img me-2" alt="" />
                                    {user?.displayName}
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className="d-flex flex-column align-items-center justify-content-center">
                                        <div className="w-25">
                                            <img src="https://place-hold.it/300x300" alt="" className="img-fluid" />
                                        </div>
                                        <p className="my-2">{user?.displayName}</p>
                                        <Link to="/dashboard" className="btn btn-primary">Dashboard</Link>
                                    </li>
                                    <hr className="w-75 mx-auto" />
                                    <li>
                                        <Link className="dropdown-item hover-color" to="/">Track My Orders</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item hover-color" to="/">My Wishlist</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item hover-color" to="/">My Reviews</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item hover-color" to="/">My Returns & Cancellations</Link>
                                    </li>
                                    <li className="text-center">
                                        <button className="btn btn-primary">Sign Out</button>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/sign-in">Sign In</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/sign-up">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;