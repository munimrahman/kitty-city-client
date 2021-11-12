import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth()
    const [myOrders, setMyOrders] = useState();
    useEffect(() => {
        fetch(`https://radiant-mesa-88609.herokuapp.com/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])
    // console.log(myOrders[0].item.cartProducts.length);
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
                            const newOrders = myOrders.filter(order => order._id !== id)
                            setMyOrders(newOrders)
                        })

                } else {
                    swal("Order Info is Safe!");
                }
            });
    }
    return (
        <div>
            <div>
                <h4 className="text-center">My Orders</h4>
                <table className="table">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">#</th>
                            <th scope="col">Order ID</th>
                            <th scope="col">Total Items</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders?.map((myOrder, index) => <tr className="text-center">
                                <th scope="roEDw">{index + 1}</th>
                                <td>{myOrder?._id}</td>
                                <td>{myOrder?.item.cartProducts.length}</td>
                                <td>
                                    {myOrder?.orderStatus === 'CONFIRMED' ? <span className="badge bg-success">CONFIRMED</span> : <span className="badge bg-warning">PENDING</span>}
                                </td>
                                <td>
                                    <Link to={`/order-received/${myOrder?._id}`}>
                                        <button className="mx-1 btn btn-info text-white shadow-none py-1" data-bs-toggle="tooltip" data-bs-placement="bottom" title="View Order">
                                            <i className="far fa-eye"></i>
                                        </button>
                                    </Link>
                                    <button onClick={() => handleDelete(myOrder?._id)} className="mx-1 btn btn-danger shadow-none py-1"><i className="fas fa-trash-alt"></i></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;