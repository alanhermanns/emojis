import React from 'react';
import Event from './Event';
import { useEvents } from '../../hooks/events';

const Events = () => {
  const { events, changeDate, month, day } = useEvents();

  const eventElements = events.map(({ text, year }) => (
    <li key={text}>
      <Event text={text} year={year} />
    </li>
  ));

  return (
    <>
      <input type="date" value={`2020-${month}-${day}`} onChange={({ target }) => changeDate(target.value)} />
      <h1>{month}/{day}</h1>
      <ul>
        {eventElements}
      </ul>
    </>
  );
};

export default Events;
