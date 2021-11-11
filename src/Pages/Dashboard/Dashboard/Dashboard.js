import React, { useState } from 'react';
import { Link, useRouteMatch, Switch, Route, useParams } from 'react-router-dom';
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageOrders from '../ManageOrders/ManageOrders';
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";
import MyReview from "../MyReview/MyReview";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageProducts from "../ManageProducts/ManageProducts";
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Authentication/AdminRoute/AdminRoute';

const Dashboard = () => {
    const { admin } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div className="container">
            <h1 className="text-center">This is Dashboard</h1>
            <div className="row bg-white rounded shadow p-4">
                <div className="col-12 col-md-2">
                    <h6><Link to={`${url}`} className="text-decoration-none py-2 border-bottom border-dark">Dashboard</Link></h6>

                    {/* General Users Dashboard Features */}
                    <h6><Link to={`${url}/my-orders`} className="text-decoration-none py-2 border-bottom border-dark">My Orders</Link></h6>
                    <h6><Link to={`${url}/my-reviews`} className="text-decoration-none py-2 border-bottom border-dark">My Reviews</Link></h6>
                    <h6><Link to={`${url}/payment`} className="text-decoration-none py-2 border-bottom border-dark">Payment</Link></h6>

                    {/* Admins Dashboard Features */}
                    {admin && <>
                        <h6><Link to={`${url}/manage-orders`} className="text-decoration-none py-2 border-bottom border-dark">Manage All Orders</Link></h6>
                        <h6><Link to={`${url}/add-product`} className="text-decoration-none py-2 border-bottom border-dark">Add a Product</Link></h6>
                        <h6><Link to={`${url}/manage-products`} className="text-decoration-none py-2 border-bottom border-dark">Manage Products</Link></h6>
                        <h6><Link to={`${url}/make-admin`} className="text-decoration-none py-2 border-bottom border-dark">Make Admin</Link></h6>
                    </>}

                    <h6>Log Out</h6>
                </div>
                <div className="col-12 col-md-10 border-start">
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route path={`${path}/my-orders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <AdminRoute path={`${path}/manage-orders`}>
                            <ManageOrders></ManageOrders>
                        </AdminRoute>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/my-reviews`}>
                            <MyReview></MyReview>
                        </Route>
                        <AdminRoute path={`${path}/add-product`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/make-admin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manage-products`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;