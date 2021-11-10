import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ShopMainPage = () => {
    return (
        <div className="container">
            <h1 className="text-center my-5">This is Shop Main page</h1>
            <div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </div>
            </div>
        </div>
    );
};

export default ShopMainPage;