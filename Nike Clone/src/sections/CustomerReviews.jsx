import React from "react";
import { ReviewCard } from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center font-bold  text-4xl">
        What our <span className="text-coral-red">Customers</span> say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center"></p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
