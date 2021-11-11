import React from 'react';
import useProducts from '../../../hooks/useProducts';
import ProductCard from '../ProductCard/ProductCard';

const ShopMainPage = () => {
    const products = useProducts([]);
    return (
        <div className="container">
            <h1 className="text-center my-5">This is Shop Main page</h1>
            <div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
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