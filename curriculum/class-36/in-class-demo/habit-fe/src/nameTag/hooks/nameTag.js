import React, { createContext, useState, useContext } from 'react';

const NameTagContext = createContext();

export const NameTagProvider = ({ children, color: initialColor = '#FFFFFF', backgroundColor: initialBackgroundColor = '#000000', text: initialText = 'Your Name Here' }) => {
  const [text, setText] = useState(initialText);
  const [color, setColor] = useState(initialColor);
  const [backgroundColor, setBackgroundColor] = useState(initialBackgroundColor);

  const stateFactoryMethod = {
    text: setText,
    color: setColor,
    backgroundColor: setBackgroundColor
  };

  const handleChange = ({ target }) => {
    stateFactoryMethod[target.name](target.value);
  };

  return (
    <NameTagContext.Provider value={{ text, color, backgroundColor, handleChange }}>
      {children}
    </NameTagContext.Provider>
  );
};

export const useNameTag = () => {
  return useContext(NameTagContext);
};

export const useNameTagText = () => {
  const { text } = useNameTag();
  return text;
};

export const useNameTagColor = () => {
  const { color } = useNameTag();
  return color;
};

export const useNameTagBackgroundColor = () => {
  const { backgroundColor } = useNameTag();
  return backgroundColor;
};

export const useNameTagHandleChange = () => {
  const { handleChange } = useNameTag();
  return handleChange;
};

// export const useNameTag = ({ color: initialColor = '#FFFFFF', backgroundColor: initialBackgroundColor = '#000000', text: initialText = 'Your Name Here' }) => {
//   const [text, setText] = useState(initialText);
//   const [color, setColor] = useState(initialColor);
//   const [backgroundColor, setBackgroundColor] = useState(initialBackgroundColor);

//   const stateFactoryMethod = {
//     text: setText,
//     color: setColor,
//     backgroundColor: setBackgroundColor
//   };

//   const handleChange = ({ target }) => {
//     stateFactoryMethod[target.name](target.value);
//   };

//   return { text, color, backgroundColor, handleChange };
// };
