import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../images/not-found-img.png'

const NotFound = () => {
    return (
        <div className="container d-flex flex-column align-items-center mx-auto">
            <h2 className="mb-3">404 - Nothing to See Here!</h2>
            <div>
                <Link to="/" className="btn btn-danger py-2 rounded-pill px-3 text-white fw-bold shadow-none">Go Home</Link>
            </div>
            <div className="w-50">
                <img src={notFoundImg} alt="404-not-found" className="img-fluid" />
            </div>
        </div>
    );
};

export default NotFound;