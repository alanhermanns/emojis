const request = (path, method, body) => {
  return fetch(`${process.env.API_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

const post = (path, body) => request(path, 'POST', body);
const get = path => request(path, 'GET');
const patch = (path, body) => request(path, 'PATCH', body);
const del = path => request(path, 'DELETE');


export const postHabit = habit => post('/habits', habit);
export const getHabits = (page = 1) => get(`/habits?page=${page}`);
export const getHabit = id => get(`/habits/${id}`);
export const patchHabit = id => patch(`/habits/${id}`);
export const delHabit = id => del(`/habits/${id}`);
