import React from 'react';
import useProducts from '../../../hooks/useProducts';
import ProductCard from '../ProductCard/ProductCard';

const ShopMainPage = () => {
    const products = useProducts([]);
    return (
        <div className="container">
            <h1 className="my-5">Shop</h1>
            <div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <ProductCard
                            key={product._id}
                            product={product}
                        ></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ShopMainPage;