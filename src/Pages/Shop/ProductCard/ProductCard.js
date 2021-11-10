import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = () => {
    return (
        <div class="col mb-5">
            <div class="card h-100">
                <img src="https://place-hold.it/300x300" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Product Name</h5>
                    <h6>Price: $45</h6>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                    <div className="text-center">
                        <Link to="/product-details">
                            <button className="btn btn-primary">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;