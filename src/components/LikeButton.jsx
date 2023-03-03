import React, { useState } from 'react';

export default function LikeButton() {
  const arrColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [buttonStates, setButtonStates] = useState({
    button1: {
      color: 'white',
      count: 0,
    },
    button2: {
      color: 'white',
      count: 0,
    },
  });
  const styles = {
    padding: '20px',
    margin: '20px',
    borderRadius: '20px',
  };
  const handleCount = (buttonId) => {
    setButtonStates((prevStates) => {
      const newState = { ...prevStates };
      newState[buttonId].count += 1;
      newState[buttonId].color =
        arrColors[Math.floor(Math.random() * arrColors.length)];
      return newState;
    });
  };

  return (
    <div>
      <button
        onClick={() => handleCount('button1')}
        style={{ ...styles, backgroundColor: buttonStates.button1.color }}
      >
        {buttonStates.button1.count} likes
      </button>
      <button
        onClick={() => handleCount('button2')}
        style={{ ...styles, backgroundColor: buttonStates.button2.color }}
      >
        {buttonStates.button2.count} likes
      </button>
    </div>
  );
}
