import React, { useState, useEffect } from 'react';
import ThisDay from '../containers/ThisDay';
import ThisDayFn from '../containers/ThisDayFn';

const Title = () => {
  const [title, setTitle] = useState('title');

  const handleChange = ({ target }) => setTitle(target.value);

  return (
    <>
      <input type="text" value={title} onChange={handleChange} />
      <h1>{title.toUpperCase()}</h1>
    </>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);

  return (
    <>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
    </>
  );
};

const getHexValue = colorDecimal => {
  return colorDecimal.toString(16).padStart(2, '0');
};

const getRandomHex = () => {
  return getHexValue(Math.floor(Math.random() * 256));
};

const getRandomColorInHex = () => {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
};

const RandomColor = ({ interval }) => {
  const [color, setColor] = useState('red');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const color = getRandomColorInHex();
      setColor(color);
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval]);

  return (
    <div style={{ backgroundColor: color, width: '50vw', height: '50vh' }}>
      {color}
    </div>
  );
};

export default function App() {
  // const [time, setTime] = useState(1000);

  // const handleChangeTime = ({ target }) => setTime(Number(target.value));
  // return (
  //   <>
  //     <input type="range" min="200" max="5000" step="200" value={time} onChange={handleChangeTime} />
  //     <RandomColor interval={time} />
  //   </>
  // );

  return (
    <>
      <ThisDayFn />
      <ThisDay />
    </>
  );
}
