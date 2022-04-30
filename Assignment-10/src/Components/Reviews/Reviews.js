import React from "react";
import useReviews from "../../Hooks/useReviews";
import ReviewCard from "../ReviewCard/ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <h1 className="text-center text-green-500 text-4xl mt-10">
        Our Customers Says!
      </h1>
      <div className="md:grid grid-cols-3 mt-24">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
