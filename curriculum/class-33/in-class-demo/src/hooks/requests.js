import { useState, useEffect } from 'react';

export const useRequest = url => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => {
        if(!res.ok) throw `Unable to fetch from ${url}: ${res.status}`;
        return res.json();
      })
      .then(json => {
        setResponse(json);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);


  return { response, loading, error };
};
