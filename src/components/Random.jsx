import React from 'react';

const Random = (props) => {
  const { min, max } = props;
  const randomNum = Math.floor(Math.random() * (max - min + 1 + min));
  return (
    <div className="response-container">
      <p>
        Random Value between {min} and {max} {'=>'} {randomNum}
      </p>
    </div>
  );
};
export default Random;
