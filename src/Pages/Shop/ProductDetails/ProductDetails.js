import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { addToDb } from '../../../utilities/fakedb';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const handleBuyNow = key => {
        addToDb(key)
    }
    return (
        <div className="text-center">
            <h1>This is Product Details page</h1>
            <div>
                <img src="https://place-hold.it/300x300" alt="" />
                <h4>{product?.name}</h4>
                <h6>Price: ${product?.price}</h6>
                <p className="w-50 mx-auto">{product?.des}</p>
                <Link to="/cart">
                    <button onClick={() => handleBuyNow(product?.key)} className="btn btn-primary">Buy Now</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetails;