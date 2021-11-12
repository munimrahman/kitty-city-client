import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import initializeFirebase from '../Firebase/firebase.init';
import { useHistory, useLocation } from 'react-router';
import signInImg from '../../../images/signin.png'
import { Link } from 'react-router-dom';
import './SignIn.css'

initializeFirebase()

const SignIn = () => {
    const { user, error, googleSignIn, signInWithEmail, logOut } = useAuth();
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
            <div className="row mx-3 d-flex align-items-center">
                <div className="col-12 col-md-6">
                    <h1 className="primary-text fw-bold text-center">Sign In</h1>
                    <div className="w-50 mx-auto">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email Address <br /> <span className="demo-font">(Demo Email: admin@admin.com)</span></label>
                            <input name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                className="form-control shadow-none"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password <br /><span className="demo-font">(Demo Pass: 123456)</span></label>

                            <input name="password"
                                type="password"
                                onBlur={handleOnBlur}
                                className="form-control shadow-none"
                                id="exampleInputPassword1"
                            />
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <small className="">New member? <Link to="/sign-up" className="text-decoration-none">Sign Up</Link> here.</small>
                            <small><Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link></small>
                        </div>
                        <h6 className="text-danger">{error}</h6>
                        <div className="text-center mt-4">
                            <button type="submit" onClick={handleEmailSignIn} className="btn btn-danger py-2 px-3 text-white fw-bold rounded-pill shadow-none">Sign In</button>
                        </div>
                    </div>
                    <p className="text-center my-3">Or, Sign In With</p>
                    <div className="d-flex justify-content-center">
                        <div onClick={handleGoogleSignIn} className="mx-3 cursor rounded bg-google text-white py-2 px-3"><i className="pe-3 fab fa-google"></i>Google</div>
                        <div className="mx-3 rounded bg-fb text-white py-2 px-3"><i className="pe-3 fab fa-facebook-f"></i>Facebook</div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img src={signInImg} className="img-fluid" alt="" />
                </div>
            </div>
            {/* <div>
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
            </div> */}
        </div>
    );
};

export default SignIn;