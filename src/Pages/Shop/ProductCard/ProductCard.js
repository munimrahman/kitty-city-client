import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const { _id, name, price, categoty, des, img1 } = props.product || {};
    return (
        <div className="col mb-5">
            <div className="card h-100">
                <img src={img1} className="card-img-top" height="350px" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>Price: ${price}</h6>
                    <p className="card-text">{des}</p>
                    <div className="text-center">
                        <Link to={`/product-details/${_id}`}>
                            <button className="btn btn-danger rounded-pill shadow-none px-3 py-2">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;