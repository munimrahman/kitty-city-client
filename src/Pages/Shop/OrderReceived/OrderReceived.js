import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./OrderReceived.css";

const OrderReceived = () => {
  const { orderId } = useParams();
  const [orderData, setOrderData] = useState({});
  const {
    _id,
    name,
    address,
    city,
    email,
    country,
    phone,
    zip,
    orderStatus,
    orderDate,
    item,
  } = orderData || {};
  const items = item?.cartProducts;
  useEffect(() => {
    fetch(`https://kitty-city-server.vercel.app/orders/${orderId}`)
      .then((res) => res.json())
      .then((data) => setOrderData(data));
  }, []);
  console.log(orderData);
  return (
    <div className="bg-eee py-4">
      <div className="container rounded bg-white shadow py-4 px-4">
        <h1 className="py-2">Order Received</h1>
        {orderStatus === "CONFIRMED" ? (
          <p>
            Welcome! Your Order is &nbsp;
            <span className="badge bg-success">CONFIRMED</span>!
          </p>
        ) : (
          <p>
            Thank you. Your Order is &nbsp;
            <span className="badge bg-warning">PENDING</span>. Please Wait for
            Confirmation!
          </p>
        )}
        <div className="d-flex">
          <div className="side-border pe-3">
            <small className="s-font">ORDER ID:</small>
            <p className="m-0">{_id}</p>
          </div>
          <div className="side-border px-3">
            <small className="s-font">DATE:</small>
            <p className="mb-0">{orderDate}</p>
          </div>
          <div className="side-border px-3">
            <small className="s-font">EMAIL:</small>
            <p className="mb-0">{email}</p>
          </div>
          <div className="side-border px-3">
            <small className="s-font">TOTAL:</small>
            <p className="mb-0">830.00$</p>
          </div>
          <div className="ps-3">
            <small className="s-font">PAYMENT METHOD:</small>
            <p className="mb-0">Direct Bank Transfer</p>
          </div>
        </div>
        <h4 className="mt-5 mb-3">Order details</h4>
        <table className="table my-4">
          <tbody>
            <tr>
              <th className="bg-secondary text-white">Products</th>
              <th className="bg-secondary text-white text-center">Subtotals</th>
            </tr>
            {items?.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td className="text-center v-align">${item.price}</td>
              </tr>
            ))}

            <tr>
              <th className="bg-secondary text-white">Payment method:</th>
              <td className="text-center">Direct Bank Transfer</td>
            </tr>
            <tr>
              <th className="bg-secondary text-white">Totals</th>
              <td className="text-center fw-bold">$240</td>
            </tr>
          </tbody>
        </table>
        <h4 className="mb-4">Billing address</h4>
        <div className="border rounded p-3">
          {name} <br />
          {address} <br />
          {city} <br />
          {zip} <br />
          {country} <br />
          {phone} <br />
          {email}
        </div>
      </div>
    </div>
  );
};

export default OrderReceived;
