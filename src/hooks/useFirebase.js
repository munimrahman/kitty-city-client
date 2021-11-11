import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Authentication/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Handle Sign In with Google
    const googleSignIn = (history, location) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                saveUser(user?.email, user?.displayName, 'PUT');
                const destination = location?.state?.from || '/';
                history.replace(destination)
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    // Create User With Email & Password
    const createUserWithEmail = (name, email, password, history) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'POST');
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
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            setIsLoading(true)
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribed();
    }, [])
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // Handle Log Out
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        })
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false))
    }

    // Save User To Database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        })
    }

    return {
        user,
        admin,
        error,
        isLoading,
        setIsLoading,
        googleSignIn,
        createUserWithEmail,
        signInWithEmail,
        logOut
    }
}

export default useFirebase;