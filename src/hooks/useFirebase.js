import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Authentication/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Handle Sign In with Google
    const googleSignIn = (history, location) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                history.replace(location?.state?.from || '/')
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    // Create User With Email & Password
    const createUserWithEmail = (name, email, password, history) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                    })
                    .catch((error) => {
                        setError(error.message)
                    });
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    // Sign In with Email & Password
    const signInWithEmail = (email, password, history, location) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                const destination = location?.state?.from || '/';
                history.replace(location?.state?.from || '/');
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        return () => unsubscribed();
    }, [])

    // Handle Log Out
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        })
            .catch((error) => {
                // An error happened.
            });
    }

    return {
        user,
        error,
        googleSignIn,
        createUserWithEmail,
        signInWithEmail,
        logOut
    }
}

export default useFirebase;