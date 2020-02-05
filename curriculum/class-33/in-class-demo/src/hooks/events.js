import { useState, useEffect } from 'react';
import { getEvents } from '../services/thisDayApi';

const now = new Date();

export const useEvents = () => {
  const [month, setMonth] = useState((now.getMonth() + 1).toString());
  const [day, setDay] = useState(now.getDate().toString());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents(month, day)
      .then(newEvents => setEvents(newEvents));
  }, [month, day]);

  const changeDate = date => {
    const [, newMonth, newDay] = date.split('-');
    setMonth(newMonth);
    setDay(newDay);
  };

  return { events, changeDate, month, day };
};
