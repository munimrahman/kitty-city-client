import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';

initializeFirebase()

const SignIn = () => {
    const [user, setUser] = useState({});
    const googleSignIn = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user)
            }).catch((error) => {

            });
    }

    return (
        <div className="text-center">
            <h1>This is Sign In Page</h1>
            <h3>{user?.displayName}</h3>
            <button onClick={googleSignIn}>Google</button>
        </div>
    );
};

export default SignIn;