import React from 'react';
import useProducts from '../../../hooks/useProducts';
import ProductCard from '../../Shop/ProductCard/ProductCard';

const FeaturedProducts = () => {
    const products = useProducts();
    const featuredProducts = products?.slice(0, 6);
    return (
        <div className="container">
            <h2 className="text-center my-5 text-danger fw-bold">Featured Products</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    featuredProducts.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedProducts;