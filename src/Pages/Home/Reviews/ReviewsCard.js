import React from 'react';
import Rating from 'react-rating';
import './ReviewCard.css'
import avatar from '../../../images/avatar.jpg'

const ReviewsCard = (props) => {
    const { name, rating, review, img } = props.review || {};

    return (
        <div className="col-12 col-md-3 m-3 shadow p-4 rounded">
            <div className="d-flex align-items-center">
                <div className="review-user-img">
                    <img src={avatar} alt="" />
                </div>
                <div className="ms-3">
                    <h6>{name}</h6>
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<i className="text-warning far fa-star"></i>}
                        placeholderSymbol={<i className="text-warning fas fa-star"></i>}
                        fullSymbol={<i className="fas fa-star"></i>}
                        readonly
                    />
                    <small className="ms-2">({rating})</small>
                </div>
            </div>
            <div className="mt-3">
                <p>{review}</p>
            </div>
        </div>
    );
};

export default ReviewsCard;