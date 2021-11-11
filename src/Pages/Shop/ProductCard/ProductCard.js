import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const { _id, name, price, categoty, des, img } = props.product || {};
    return (
        <div class="col mb-5">
            <div class="card h-100">
                <img src={img} class="card-img-top" height="350px" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <h6>Price: ${price}</h6>
                    <p class="card-text">{des}</p>
                    <div className="text-center">
                        <Link to={`/product-details/${_id}`}>
                            <button className="btn btn-primary">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;