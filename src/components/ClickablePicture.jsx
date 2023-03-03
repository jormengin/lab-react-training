import React, { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <img
      src={clicked ? imgClicked : img}
      alt={clicked ? 'img clicked' : 'not clicked'}
      onClick={handleClick}
    />
  );
}

export default ClickablePicture;
