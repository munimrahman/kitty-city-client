import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import initializeFirebase from '../Firebase/firebase.init';
import { useHistory, useLocation } from 'react-router';

initializeFirebase()

const SignIn = () => {
    const { user, googleSignIn, signInWithEmail, logOut } = useAuth();
    const [logInData, setLogInData] = useState({});
    const location = useLocation();
    const history = useHistory();
    // console.log(location, history);
    // console.log(location?.state);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserData = { ...logInData }
        newUserData[field] = value;
        setLogInData(newUserData);
    }
    const handleEmailSignIn = e => {
        e.preventDefault();
        signInWithEmail(logInData.email, logInData.password, history, location)
    }
    const handleGoogleSignIn = () => {
        googleSignIn(history, location)
    }
    return (
        <div className="text-center">
            <div>
                <form onSubmit={handleEmailSignIn}>
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
                        value="Sign In"
                    />
                </form>
            </div>
            <div>
                <h1>This is Sign In Page</h1>
                <h3>{user?.displayName}</h3>
                <h3>{user?.email}</h3>
                <button onClick={handleGoogleSignIn}>Google</button>
                <button onClick={logOut}>Log Out</button>
            </div>
        </div>
    );
};

export default SignIn;