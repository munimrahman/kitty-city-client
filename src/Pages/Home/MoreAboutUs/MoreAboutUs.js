import React from 'react';
import aboutusdog from '../../../images/about-uu-dog.jpg'

const MoreAboutUs = () => {
    return (
        <div className="container row mx-auto my-5">
            <div className="col-12 col-md-6">
                <h1 className="mb-3">More about Us</h1>
                <p>Sit et legLorem ipsum dolor sit amet, est ei error insolens ullamcorper, ut erant aliquip quaerendum sed. Errem phaedrum id vix. Ea cibo nullam fuisset eam.ere alienum omittam, pri utinam nonumy at, malis tollit habemus est ad. Ea cibo nullam fuisset eam.</p>
                <img src={aboutusdog} className="img-fluid rounded" alt="" />
            </div>
            <div className="col-12 col-md-6 bg-danger rounded py-4 text-white">
                <div className="w-75 mx-auto ">
                    <h3 className="mb-3">Feel free to ask us anything.</h3>
                    <p>Sit et legLorem ipsum dolor sit amet, est ei error insolens ullamcorper, ut erant aliquip quaerendum sed.</p>
                </div>
                <form className="mt-4 w-75 mx-auto">

                    <div className="mb-2">
                        <label className="mb-2">Email</label> <br />
                        <input
                            className="form-control shadow-none"
                            type="email"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="mb-2">Your Message</label> <br />
                        <textarea
                            className="form-control shadow-none"
                            type="text"
                            placeholder="Message"
                            rows="5"
                        />
                    </div>
                    <div className="mt-3">
                        <input className="btn btn-info text-white py-0 px-4 shadow-none rounded-pill fw-bold py-2 px-3" type="submit" value="Contact Us" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MoreAboutUs;