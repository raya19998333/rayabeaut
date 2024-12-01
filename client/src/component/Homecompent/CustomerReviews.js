import React from "react";
import { FaStar } from "react-icons/fa"; // For adding star icons as ratings
import female from "../Photos/female.png";
const CustomerReviews = () => {
  return (
    <section className="customer-reviews">
      <h2 className="display-6">What Our Customers Are Saying</h2>
      <br></br>
      <br></br>
      <div className="reviews-container">
        <div className="review-card">
          <div className="review-header">
            <img src={female} alt="Customer 1" className="review-avatar" />
            <div className="review-rating">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="star-icon" />
              ))}
            </div>
          </div>
          <p className="review-text">"Great quality, love the products!"</p>
          <p className="review-author">- Customer 1</p>
        </div>

        <div className="review-card">
          <div className="review-header">
            <img src={female} alt="Customer 2" className="review-avatar" />
            <div className="review-rating">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="star-icon" />
              ))}
            </div>
          </div>
          <p className="review-text">"I recommend this brand to everyone!"</p>
          <p className="review-author">- Customer 2</p>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
