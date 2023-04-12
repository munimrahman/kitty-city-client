import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const UpdateOrder = () => {
  const { updateOrderId } = useParams();
  const history = useHistory();
  const [order, setOrder] = useState({
    address: "",
    city: "",
    country: "",
    des: "",
    desOptional: "",
    email: "",
    item: {},
    name: "",
    orderDate: "",
    orderKey: {},
    orderStatus: "",
    paymentMethod: {},
    phone: "",
    zip: "",
    _id: "",
  });
  // const history = useHistory();
  useEffect(() => {
    fetch(`https://kitty-city-server.vercel.app/orders/${updateOrderId}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  console.log(order);
  const handleUpdateOrder = () => {
    fetch(`https://kitty-city-server.vercel.app/orders/${updateOrderId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal({
            title: "Order Status Updated Successfully!",
            icon: "success",
            button: "OK",
          });
          history.push("/dashboard/manage-orders");
        }
        // window.location.reload()
      });
    // history.push('/dashboard/manage-orders')
  };

  const handleOrderStatus = (e) => {
    const updateOrderStatus = e.target.value;
    const updateOrder = {
      address: order.address,
      city: order.city,
      country: order.country,
      des: order.des,
      desOptional: order.desOptional,
      email: order.email,
      item: order.item,
      name: order.name,
      orderDate: order.orderDate,
      orderKey: order.orderKey,
      orderStatus: updateOrderStatus,
      paymentMethod: order.paymentMethod,
      phone: order.phone,
      zip: order.zip,
      _id: order._id,
    };
    setOrder(updateOrder);
  };

  return (
    <div className="text-center">
      <h1>Update Order Page</h1>
      <h4>Order Id: {order._id}</h4>
      <div>
        <p>{order?.name}</p>
        <p>{order?.email}</p>
        <select
          onChange={handleOrderStatus}
          className="form-select w-25 mx-auto"
          aria-label="Default select example"
        >
          <option value="PENDING">Pending</option>
          <option value="CONFIRMED">Confirm</option>
        </select>
        <br />
        {/* <Link to="/dashboard/manage-orders"> */}
        <button onClick={handleUpdateOrder}>Update</button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default UpdateOrder;
