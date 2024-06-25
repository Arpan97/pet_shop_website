import React from "react";

interface StarProps {
  totalStars: any;
  rating: any;
}

const StarComponent = ({ totalStars, rating = null }: StarProps) => {
  return (
    <div>
      {[...Array(totalStars)]?.map((star, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              disabled
              className="hidden"
            />
            <span
              className="star"
              style={{ color: currentRating <= rating ? "#ffc107" : "#e4e5e9" }}
            >
              &#9733;
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default StarComponent;
