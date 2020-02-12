// What will print here?
const actions = [
  { type: 'INCREMENT' },
  { type: 'INCREMENT' },
  { type: 'DECREMENT' },
  { type: 'INCREMENT_BY', payload: 5 },
  { type: 'DECREMENT_BY', payload: 2 }
];

const initialState = { count: 0 };

const newState = actions.reduce((state, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'INCREMENT_BY':
      return { ...state, count: state.count + action.payload };
    case 'DECREMENT_BY':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}, initialState);

console.log(newState);


const numbers = [1, 2, 3, 4];

const doubles = numbers.reduce(
  (acc, number) => [...acc, number * 2],
  []
);

console.log(doubles);
