import React from "react";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";

const calculateAverageRating = (ratings: any) => {
  if (ratings.length === 0) {
    return 0;
  }

  const totalRating = ratings.reduce(
    (sum: any, rating: any) => sum + rating,
    0,
  );
  return totalRating / ratings.length;
};

const RatingDisplay = ({ m }: any) => {
  const averageRating = calculateAverageRating(m);

  // Assuming average rating is a number between 0 and 5
  const renderedStars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon
      key={index}
      color={index < averageRating ? "primary" : "disabled"}
    />
  ));

  return (
    <div>
      <Typography>
        Rating: {averageRating.toFixed(2)} ({m.length} reviews)
      </Typography>
      <div>{renderedStars}</div>
    </div>
  );
};

export default RatingDisplay;
