import React, { useState, useEffect } from 'react';

const Counter = ({ finishGame }) => {
  const [count, setCount] = useState(0);

  const handleKeyPress = (event) => {
    console.log('key pressed');
    if (event.key === 'Enter') {
      setCount(prevCount => prevCount + 1);
    }
  };

  // Tambah keydown event listener tanpa cleanup function
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    console.log('rendered');

    // Cleanup function dihapus untuk melihat dampaknya
    // return () => {
    //   window.removeEventListener('keydown', handleKeyPress);
    //   console.log('cleaned up');
    // };
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 style={{ fontSize: '64px' }}>{count}</h1>
      <button
        style={buttonStyle}
        onClick={handleClick}
      >
        +
      </button>
      <div>
        <button
          onClick={finishGame}
          style={buttonStyle}
        >
          Finish Game
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  fontSize: '32px',
  width: '200px',
  height: '48px',
  borderRadius: '4px',
  marginRight: '24px',
  marginLeft: '24px',
  marginTop: '30px',
  color: '#fff',
  backgroundColor: '#66ccff',
};

export default Counter;
