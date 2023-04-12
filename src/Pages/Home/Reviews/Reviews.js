import React, { useEffect, useState } from "react";
import ReviewsCard from "./ReviewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://kitty-city-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container">
      <h2 className="text-center mb-5 text-danger fw-bold">Client Reviews</h2>
      <div className="row justify-content-center">
        {reviews?.map((review) => (
          <ReviewsCard key={review._id} review={review}></ReviewsCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
