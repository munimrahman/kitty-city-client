import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const ManageOrders = () => {
    const [orders, setOrders] = useState();
    useEffect(() => {
        fetch('https://radiant-mesa-88609.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = id => {
        swal({
            title: "Are You Sure to Delete?",
            text: "Once deleted, you will not be able to recover this order data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://radiant-mesa-88609.herokuapp.com/orders/${id}`, {
                        method: "DELETE",
                        headers: { 'content-type': 'application/json' }
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("Order has been deleted!", {
                                    icon: "success",
                                });
                            }
                            const newOrders = orders.filter(order => order._id !== id)
                            setOrders(newOrders)
                        })

                } else {
                    swal("Order Info is Safe!");
                }
            });
    }

    return (
        <div>
            <h3 className="text-center">Manage All Orders</h3>
            <div>
                <table className="table">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">#</th>
                            {/* <th scope="col">Order ID</th> */}
                            <th scope="col">Order Id</th>
                            <th scope="col">User Name</th>
                            <th scope="col">User Email</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr className="text-center">
                                <th scope="roEDw">{index + 1}</th>
                                {/* <td>{order?._id}</td> */}
                                <td>{order?._id}</td>
                                <td>{order?.name}</td>
                                <td>{order?.email}</td>
                                <td>
                                    {order?.orderStatus === 'CONFIRMED' ? <span className="badge bg-success">APPROVED</span> : <span className="badge bg-warning">PENDING</span>}
                                </td>
                                <td>
                                    <Link to={`/update-order/${order?._id}`}>
                                        <button className="mx-1 btn btn-info text-white shadow-none py-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                    </Link>
                                    <button onClick={() => handleDelete(order?._id)} className="mx-1 btn btn-danger shadow-none py-1"><i className="fas fa-trash-alt"></i></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;