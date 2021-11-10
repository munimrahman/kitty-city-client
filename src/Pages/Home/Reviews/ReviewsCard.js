import React from 'react';

const ReviewsCard = () => {
    return (
        <div className="col-12 col-md-4">
            <div className="d-flex">
                <img src="https://place-hold.it/100x100" alt="" />
                <div className="ms-3">
                    <h6>User Name</h6>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                </div>
            </div>
            <div className="mt-3">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam non repudiandae voluptas, qui laudantium reiciendis esse. Illum animi architecto cum pariatur accusamus dolore nisi, maxime minima veniam. Accusamus, nesciunt porro.</p>
            </div>
        </div>
    );
};

export default ReviewsCard;