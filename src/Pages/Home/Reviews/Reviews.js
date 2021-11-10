import React from 'react';
import ReviewsCard from './ReviewsCard';

const Reviews = () => {
    return (
        <div className="container">
            <h1 className="text-center mb-5">Client Reviews</h1>
            <div className="row">
                <ReviewsCard></ReviewsCard>
                <ReviewsCard></ReviewsCard>
                <ReviewsCard></ReviewsCard>
            </div>
        </div>
    );
};

export default Reviews;