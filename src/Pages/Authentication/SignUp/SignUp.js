import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import signUpImg from '../../../images/signup.png'

const SignUp = () => {
    const { user, error, googleSignIn, createUserWithEmail, logOut } = useAuth();
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
            <div className="row mx-3 d-flex align-items-center">
                <div className="col-12 col-md-6">
                    <h1 className="primary-text fw-bold text-center">Sign Up</h1>
                    <div className="w-50 mx-auto">
                        <form onSubmit={handleEmailSignUp}>
                            <div className="mb-3">
                                <label htmlFor="FullName" className="form-label">Name</label>
                                <input name="displayName"
                                    type="text"
                                    onBlur={handleOnBlur}
                                    className="form-control shadow-none"
                                    id="Name"
                                    aria-describedby="emailHelp"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input name="email"
                                    type="email"
                                    onBlur={handleOnBlur}
                                    className="form-control shadow-none"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input name="password"
                                    type="password"
                                    onBlur={handleOnBlur}
                                    className="form-control shadow-none"
                                    id="exampleInputPassword1"
                                    required
                                />
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <small>Already member? <Link to="/sign-in" className="text-decoration-none">Sign In</Link> here.</small>
                            </div>
                            <h6 className="text-danger">{error}</h6>
                            <div className="text-center mt-4">
                                <input
                                    type="submit"
                                    value="Sign Up"
                                    className="btn btn-danger py-2 px-3 shadow-none text-white fw-bold rounded-pill"
                                />
                            </div>
                        </form>
                    </div>
                    <p className="text-center my-3">Or, Sign Up With</p>
                    <div className="d-flex justify-content-center">
                        <div onClick={googleSignIn} className="mx-3 cursor rounded bg-google text-white py-2 px-3"><i className="pe-3 fab fa-google"></i>Google</div>
                        <div className="mx-3 rounded bg-fb text-white py-2 px-3"><i className="pe-3 fab fa-facebook-f"></i>Facebook</div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img src={signUpImg} className="img-fluid" alt="" />
                </div>
            </div>
            {/* <h1>This is Sign Up Page</h1>
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
            </div> */}
        </div>
    );
};

export default SignUp;