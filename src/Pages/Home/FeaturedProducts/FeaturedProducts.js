import React from 'react';
import ProductCard from '../../Shop/ProductCard/ProductCard';

const FeaturedProducts = () => {
    return (
        <div className="container">
            <h2 className="text-center my-5">Featured Products</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </div>
    );
};

export default FeaturedProducts;