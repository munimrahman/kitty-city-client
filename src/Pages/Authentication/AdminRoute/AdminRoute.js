import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    // if (isLoading) {
    //     return (
    //         <div className="text-center my-5">
    //             <div className="spinner-border text-info" role="status">
    //                 <span className="visually-hidden">Loading...</span>
    //             </div>
    //         </div>
    //     )
    // }
    if (!admin) {
        return (
            <div className="text-center my-5">
                <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email && admin ? children :
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: location }
                    }}
                ></Redirect>
            }
        ></Route>
    );
};

export default AdminRoute;