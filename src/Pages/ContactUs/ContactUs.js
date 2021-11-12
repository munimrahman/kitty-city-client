import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <div className="w-75 row mx-auto my-5 d-flex align-items-center">
                {/* contact info section */}
                <div className="col-12 col-md-4">
                    <div className="d-flex align-items-center">
                        <div className="bg-info icn d-flex align-items-center justify-content-center">
                            <i className="fas fa-map-marker-alt fs-3 text-white"></i>
                        </div>
                        <div className="ms-4">
                            <h4>Address</h4>
                            <address>250 Main Street, New York</address>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="bg-info icn d-flex align-items-center justify-content-center">
                            <i className="fas fa-envelope-open fs-3 text-white"></i>
                        </div>
                        <div className="ms-4">
                            <h4>Email</h4>
                            <p>kittycity@gmail.com</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="bg-info icn d-flex align-items-center justify-content-center">
                            <i className="fas fa-phone fs-3 text-white"></i>
                        </div>
                        <div className="ms-4">
                            <h4>Call Us</h4>
                            <p>+ (12) 123 - 556 - 7890
                                <br /> + (12) 123 - 682 - 9358
                            </p>
                        </div>
                    </div>
                </div>
                {/* contact form section */}
                <div className="col-12 col-md-8 border-start border-info">
                    <div className="ms-3">
                        <h2>Feel Free to Send Us a Message</h2>
                        <p>We always want to hear you. We will response with in 24 hours!</p>
                        <div>
                            <div className="row mb-3">
                                <div className="col">
                                    <p>Name</p>
                                    <input type="text" className="form-control shadow-none" placeholder="Your Name" aria-label="Your Name" />
                                </div>
                                <div className="col">
                                    <p>Email</p>
                                    <input type="email" className="form-control shadow-none" placeholder="Email" aria-label="Email" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <p>Message</p>
                                <textarea className="form-control shadow-none" id="exampleFormControlTextarea1" rows="8"></textarea>
                            </div>
                            <button className="btn custom-btn py-2 px-3 rounded-pill fw-bold text-white shadow-none">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;