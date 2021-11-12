import React from 'react';
import "./HomeInfo.css";

const HomeInfo = () => {
    return (
        <div className="container mx-auto d-flex flex-column flex-md-row my-5">
            <div className="shadow mx-3 info-box d-flex flex-column align-items-center px-5 py-4 w-50">
                <div className="icn-dev bg-danger d-flex justify-content-center align-items-center my-3">
                    <i className="text-white fs-4 fas fa-shipping-fast"></i>
                </div>
                <h4 className=" my-3">Free Shipping</h4>
                <p className="text-center">Nulla Lorem Mollit Cupidatat Irure. Laborum Magna Nulla Duis Ullamco Cillu.</p>
            </div>
            <div className="shadow mx-3 info-box d-flex flex-column align-items-center px-5 py-4 w-50">
                <div className="icn-dev bg-danger d-flex justify-content-center align-items-center my-3">
                    <i className="text-white fs-4 fas fa-gift"></i>
                </div>
                <h4 className=" my-3">Gift voucher</h4>
                <p className="text-center">Nulla Lorem Mollit Cupidatat Irure. Laborum Magna Nulla Duis Ullamco Cillu.</p>
            </div>
            <div className="shadow mx-3 info-box d-flex flex-column align-items-center px-5 py-4 w-50">
                <div className="icn-dev bg-danger d-flex justify-content-center align-items-center my-3">
                    <i className="text-white fs-4 fas fa-money-check-alt"></i>
                </div>
                <h4 className=" my-3">Secure payment</h4>
                <p className="text-center">Nulla Lorem Mollit Cupidatat Irure. Laborum Magna Nulla Duis Ullamco Cillu.</p>
            </div>
        </div>
    );
};

export default HomeInfo;