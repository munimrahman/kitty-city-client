import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../../hooks/useCart';
import { removeFromDb } from '../../../utilities/fakedb';
import './Cart.css'

const Cart = () => {
    const cartProducts = useCart();
    const handleRemove = (key) => {
        removeFromDb(key)
    }
    return (
        <div className="container">
            <h1 className="py-3">Cart</h1>
            <div className="row pb-4">
                <div className="col-12 col-md-9">
                    <table className="table">
                        <thead>
                            <tr className="text-center">
                                <th className="col-6">Products</th>
                                <th className="col-2">Price</th>
                                <th className="col-2">Quantity</th>
                                <th className="col-2">Subtotal</th>
                                <th className="col-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartProducts.map(item => <tr>
                                <td className="col-7">
                                    <div className="row align-items-center">
                                        <div className="col-4 py-0 px-1">
                                            <img src={cartProducts.img} className="img-fluid" alt="" />
                                        </div>
                                        <div className="col-8">
                                            <p className="m-0">{item.name}</p>
                                            <p className="m-0">All Inclusive Twin Room</p>
                                            <p className="m-0">Dates: November 6, 2021 to November 13, 2021</p>
                                            <p className="m-0">People: 1 adults, 0 children</p>
                                            <p className="m-0">Rooms: 1</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="col-2 text-center v-align">$ {item.price}</td>
                                <td className="col-2 text-center v-align">2</td>
                                <td className="col-2 text-center v-align">$240</td>
                                <td className="col-2 text-center v-align">
                                    <button onClick={() => handleRemove(item.key)} className="btn btn-outline-danger shadow-none fw-bold px-2 py-0">X</button>
                                </td>
                            </tr>)
                            }
                            {cartProducts.length === 0 && <tr>
                                <td colSpan="5">
                                    <div className="container text-center">
                                        <div className="alert alert-danger" role="alert">
                                            No items in your Cart. Please Select a Package From <Link to="/packages" className="primary-text fw-bold text-decoration-none alert-hover">Our Packages!</Link>
                                        </div>
                                    </div>
                                </td>
                            </tr>}
                        </tbody>
                        <tfoot className="text-center">
                            <tr>
                                <td colspan="2">
                                    <div className="d-flex">
                                        <input type="text" name="" id="" className="form-control w-25 me-2 shadow-none" />
                                        <button className="btn shadow-none btn-danger px-3 py-2 rounded-pill">Apply Coupon</button>
                                    </div>
                                </td>
                                <td className="fw-bold">Subtotals:</td>
                                <td className="fw-bold">$240</td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="col-12 col-md-3 shadow cart-side">
                    <h6 className="pt-4 text-center">Cart totals</h6>
                    <hr className="px-2" />
                    <div>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>$500</td>
                                </tr>
                                <tr>
                                    <td>Tax</td>
                                    <td>$29</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Total</td>
                                    <td className="fw-bold">$529</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="check-out-btn d-flex justify-content-center">
                        <Link to="/check-out">
                            <button className="btn btn-danger shadow-none rounded-pill px-3 py-2">PROCEED TO CHECKOUT</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;