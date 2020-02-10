export const getHabits = (page = 1) => {
  return fetch(`${process.env.API_URL}/habits?page=${page}`)
    .then(res => res.json());
};
