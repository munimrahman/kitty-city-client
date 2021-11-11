import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import useCart from '../../../hooks/useCart';
import { clearTheCart } from '../../../utilities/fakedb';

const CheckOut = () => {
    const cartProducts = useCart();
    const history = useHistory();
    const { register, reset, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        const orderDate = today.toLocaleDateString("en-US", options);
        // data.paymentMethod = { pay }
        data.orderStatus = "PENDING"
        // data.orderKey = { pass }
        data.orderDate = orderDate
        data.item = { cartProducts }
        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(orderInfo => {
                console.log(orderInfo);
                clearTheCart()
                history.push(`/order-received/${orderInfo.insertedId}`)
            })
        // console.log(orderId);
        console.log(data);
        const orderIdInfo = data.orderIdInfo || {};
        console.log(orderIdInfo);
    };
    return (
        <div className="container">
            <h1>Check Out</h1>
            < div className="row">
                <div className="col-12 col-md-9">
                    <h4 className="text-center">Billing Details</h4>
                    <div className="d-flex justify-content-center mx-auto">
                        <form className="mt-4 w-75">
                            <div className="mb-2">
                                <label className="mb-2">Your Name*</label> <br />
                                <input
                                    className="form-control shadow-none"
                                    type="text"
                                    {...register("name", { required: true })}
                                    // defaultValue={user?.displayName}
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="mb-2">Address*</label> <br />
                                <input
                                    className="form-control shadow-none"
                                    type="text"
                                    {...register("address", {
                                        required: true
                                    })}
                                    placeholder="Salia Bakpur, Banaripara"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="mb-2">City*</label> <br />
                                <input
                                    className="form-control shadow-none"
                                    type="text"
                                    {...register("city", {
                                        required: true
                                    })}
                                    placeholder="Barishal"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="mb-2">Zip Code*</label> <br />
                                <input
                                    className="form-control shadow-none"
                                    type="text"
                                    {...register("zip", {
                                        required: true
                                    })}
                                    placeholder="8530"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="mb-2">Country*</label> <br />
                                <input
                                    className="form-control shadow-none"
                                    type="text"
                                    {...register("country", {
                                        required: true
                                    })}
                                    defaultValue="Bangladesh"
                                    placeholder="Bangladesh"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="mb-2">Phone (Optional)</label> <br />
                                <input
                                    className="form-control shadow-none"
                                    type="number"
                                    {...register("phone")}
                                    placeholder="01XXXXXXXXX"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="mb-2">Email*</label> <br />
                                <input
                                    className="form-control shadow-none"
                                    type="email"
                                    {...register("email", {
                                        required: true
                                    })}
                                    // value={user?.email}
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="mb-2">Special Requirements (Optional)</label> <br />
                                <textarea
                                    className="form-control shadow-none"
                                    type="text"
                                    {...register("des")}
                                    placeholder="Special Requirements"
                                    rows="5"
                                />
                            </div>
                        </form>
                    </div>

                </div>
                <div className="col-12 col-md-3">
                    <h3>Your Order</h3>
                    <hr />
                    <div>
                        <p>Total: $456</p>
                        <hr />
                    </div>
                    <button onClick={handleSubmit(onSubmit)} className="btn shadow-none btn-primary py-3 px-4 rounded-pill px-3 py-2">PLACE ORDER</button>

                </div>
            </div>
        </div>
    );
};

export default CheckOut;