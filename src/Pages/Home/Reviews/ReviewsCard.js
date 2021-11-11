import React from 'react';
import Rating from 'react-rating';

const ReviewsCard = (props) => {
    const { name, rating, review } = props.review || {};

    return (
        <div className="col-12 col-md-4">
            <div className="d-flex">
                <img src="https://place-hold.it/100x100" alt="" />
                <div className="ms-3">
                    <h6>{name}</h6>
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<i class="text-warning far fa-star"></i>}
                        placeholderSymbol={<i class="text-warning fas fa-star"></i>}
                        fullSymbol={<i class="fas fa-star"></i>}
                        readonly
                    />
                </div>
            </div>
            <div className="mt-3">
                <p>{review}</p>
            </div>
        </div>
    );
};

export default ReviewsCard;