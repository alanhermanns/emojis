import React, { useState } from 'react';
import Events from '../components/events/Events';
import { useEvents } from '../hooks/events';

const now = new Date();

const ThisDayFn = () => {
  const { events, changeDate, month, day } = useEvents();

  return (
    <>
      <input type="date" value={`2020-${month}-${day}`} onChange={({ target }) => changeDate(target.value)} />
      <h1>{month}/{day}</h1>
      <Events events={events} />
    </>
  );
};

export default ThisDayFn;
