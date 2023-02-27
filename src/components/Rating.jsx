import React from 'react';

const Rating = (props) => {
  const { children } = props;
  const childrenRound = Math.round(children);
  const stars = '★'.repeat(childrenRound) + '☆'.repeat(5 - childrenRound);
  return <div className='stars'>{stars}</div>;
};

export default Rating;
