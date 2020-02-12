export const INCREMENT = 'INCREMENT';
export const increment = () => ({
  type: INCREMENT
});

export const DECREMENT = 'DECREMENT';
export const decrement = () => ({
  type: DECREMENT
});

export const INCREMENT_BY = 'INCREMENT_BY';
export const incrementBy = () => ({
  type: INCREMENT_BY
});

export const CHANGE_NUMBER = 'CHANGE_NUMBER';
export const changeNumber = number => {
  const payload = Number(number);
  if(isNaN(payload)) throw `${number} is not a number`;

  return {
    type: 'CHANGE_NUMBER',
    payload
  };
};
