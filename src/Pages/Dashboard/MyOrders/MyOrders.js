import React from 'react';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    return (
        <div>
            <h1>This is My Orders!</h1>
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
                        <tr className="text-center">
                            <th scope="roEDw">zdyh</th>
                            <td>xxxxjhxdfgj</td>
                            <td>cfgujh</td>
                            <td>
                                fgyj
                            </td>
                            <td>
                                <Link to="">
                                    <button className="mx-1 btn btn-info text-white shadow-none py-1" data-bs-toggle="tooltip" data-bs-placement="bottom" title="View Order">
                                        <i className="far fa-eye"></i>
                                    </button>
                                </Link>
                                <button className="mx-1 btn btn-danger shadow-none py-1"><i className="fas fa-trash-alt"></i></button>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <th scope="roEDw">zdyh</th>
                            <td>xxxxjhxdfgj</td>
                            <td>cfgujh</td>
                            <td>
                                fgyj
                            </td>
                            <td>
                                <Link to="">
                                    <button className="mx-1 btn btn-info text-white shadow-none py-1" data-bs-toggle="tooltip" data-bs-placement="bottom" title="View Order">
                                        <i className="far fa-eye"></i>
                                    </button>
                                </Link>
                                <button className="mx-1 btn btn-danger shadow-none py-1"><i className="fas fa-trash-alt"></i></button>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <th scope="roEDw">zdyh</th>
                            <td>xxxxjhxdfgj</td>
                            <td>cfgujh</td>
                            <td>
                                fgyj
                            </td>
                            <td>
                                <Link to="">
                                    <button className="mx-1 btn btn-info text-white shadow-none py-1" data-bs-toggle="tooltip" data-bs-placement="bottom" title="View Order">
                                        <i className="far fa-eye"></i>
                                    </button>
                                </Link>
                                <button className="mx-1 btn btn-danger shadow-none py-1"><i className="fas fa-trash-alt"></i></button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;