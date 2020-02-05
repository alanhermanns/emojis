export const getEvents = jest.fn(() => Promise.resolve([
  { year: '2020', text: 'you made this' },
  { year: '2019', text: 'you thought about making this' }
]));
