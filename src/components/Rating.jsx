import React from 'react';

export const convertRating = (rating) => {
  const childrenRound = Math.round(rating);
  const stars = '★'.repeat(childrenRound) + '☆'.repeat(5 - childrenRound);
  return stars;
};
const Rating = (props) => {
  const { children } = props;
  const stars = convertRating(children);
  return <div className="stars">{stars}</div>;
};

export default Rating;
