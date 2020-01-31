export const getSimpsonsQuote = () => {
  return Promise.resolve({
    text: 'My Cool Quote',
    name: 'A character',
    img: '/path/to/image.png'
  });
};

export const getRonQuote = () => {
  return Promise.resolve({
    text: 'My Cool Quote',
    name: 'A character',
    img: '/path/to/image.jpg'
  });
};
