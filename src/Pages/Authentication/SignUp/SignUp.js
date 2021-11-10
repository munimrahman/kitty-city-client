import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
    const { user, googleSignIn, createUserWithEmail, logOut } = useAuth();
    const [userData, setUserData] = useState({});
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserData = { ...userData }
        newUserData[field] = value;
        setUserData(newUserData);
    }
    const handleEmailSignUp = e => {
        e.preventDefault();
        createUserWithEmail(userData.displayName, userData.email, userData.password, history)

    }
    return (
        <div className="container text-center">
            <h1>This is Sign Up Page</h1>
            <div className="row">
                <div className="col-12 col-md-6">
                    <form onSubmit={handleEmailSignUp}>
                        <label>Name</label> <br />
                        <input
                            name="displayName"
                            type="text"
                            onBlur={handleOnBlur}
                        /> <br />
                        <label>Email</label> <br />
                        <input
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                        /><br />

                        <label>Password</label> <br />
                        <input
                            name="password"
                            type="password"
                            onBlur={handleOnBlur}
                        /><br />
                        <input
                            type="submit"
                            value="Sign Up"
                        />
                    </form>
                </div>
                <div className="col-12 col-md-6">
                    <img src="https://place-hold.it/300x300" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;