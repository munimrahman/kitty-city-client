import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import ReactStars from "react-rating-stars-component";

const MyReview = () => {
    const { user } = useAuth();
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('5');

    const handleReview = e => {
        setReview(e.target.value)
    }
    const handleOnSubmit = e => {
        const userReview = { name: user?.displayName, rating: rating, review: review }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review Added Successfully!')
                }
            })

        e.preventDefault()
    }

    const thirdExample = {
        size: 20,
        count: 5,
        isHalf: false,
        value: 3.5,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: (newValue) => {
            setRating(`${newValue}`);
        }
    };
    return (
        <div>
            <h1>This is My Review Page</h1>
            <div>
                <h4>Full stars rating only, a11y and other colors</h4>
                {/* <ReactStars {...thirdExample} /> */}
                <form onSubmit={handleOnSubmit}>

                    <label>Rating</label> <br />
                    <ReactStars {...thirdExample} />

                    <label>Review</label> <br />
                    <textarea onBlur={handleReview} name="review" placeholder="Write Your Review Here!"></textarea> <br />

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MyReview;