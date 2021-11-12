import React from 'react';
import useAuth from '../../../hooks/useAuth';
import avatar from '../../../images/avatar.jpg'

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div className="text-center py-4">
            <div>
                <img src={avatar} className="rounded pb-4" alt="" />
                <h1>Hello {user?.displayName}!</h1>
                <h1>Welcome to Kitty City Site Dashboard!</h1>
            </div>
        </div>
    );
};

export default DashboardHome;