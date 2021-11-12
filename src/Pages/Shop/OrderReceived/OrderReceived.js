import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const OrderReceived = () => {
    const { orderId } = useParams();
    const [orderData, setOrderData] = useState({});
    useEffect(() => {
        fetch(`https://radiant-mesa-88609.herokuapp.com/orders/${orderId}`)
            .then(res => res.json())
            .then(data => setOrderData(data))
    }, [])
    // console.log(orderData?.orderDate);
    return (
        <div>
            <h1>Order Received Page</h1>
            <div>
                <p>Order Status: Pending</p>
                <p>Order ID: {orderData?._id}</p>
                <p>Order Date: {orderData?.orderDate}</p>
                <p>Order Email: {orderData?.email}</p>
                <p>Payment: Card</p>
                <p>Total: $541</p>
                <p>Items: 4</p>
                <p>Billing address: User Name</p>
            </div>
        </div>
    );
};

export default OrderReceived;