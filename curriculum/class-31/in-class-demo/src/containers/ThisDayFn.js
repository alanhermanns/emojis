import React, { useState, useEffect } from 'react';
import Events from '../components/events/Events';
import { getEvents } from '../services/thisDayApi';

const now = new Date();

const ThisDayFn = () => {
  const [month, setMonth] = useState((now.getMonth() + 1).toString());
  const [day, setDay] = useState(now.getDate().toString());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents(month, day)
      .then(events => setEvents(events));
  }, [month, day]);

  const handleDateChange = ({ target }) => {
    const [, newMonth, newDay] = target.value.split('-');
    setMonth(newMonth);
    setDay(newDay);
  };

  return (
    <>
      <input type="date" value={`2020-${month}-${day}`} onChange={handleDateChange} />
      <h1>{month}/{day}</h1>
      <Events events={events} />
    </>
  );
};

export default ThisDayFn;
