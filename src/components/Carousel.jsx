import React, { useState } from 'react';

export default function Carousel({ images }) {
  const [index, setIndex] = useState(Math.floor(Math.random() * images.length));
  const [image, setImage] = useState(images[index]);
  const handleLeftClick = () => {
    setIndex((index) => (index === 0 ? images.length - 1 : index - 1));
    setImage(images[index]);
  };

  const handleRightClick = () => {
    setIndex((index) => (index === images.length - 1 ? 0 : index + 1));
    setImage(images[index]);
  };

  return (
    <div className="carouselContainer">
      <img src={image} alt="Carousel" />
      <div className="carouselBtnContainer">
        <button onClick={handleLeftClick}>Left</button>
        <button onClick={handleRightClick}>Right</button>
      </div>
    </div>
  );
}
