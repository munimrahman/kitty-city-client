import React from 'react';

const ProductDetails = () => {
    return (
        <div className="text-center">
            <h1>This is Product Details page</h1>
            <div>
                <img src="https://place-hold.it/300x300" alt="" />
                <h4>Product Name</h4>
                <h6>Price: $45</h6>
                <p className="w-50 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, odit quisquam suscipit praesentium quos impedit non iure quo eligendi id est laborum omnis libero dolor labore illo quae exercitationem at!</p>
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    );
};

export default ProductDetails;