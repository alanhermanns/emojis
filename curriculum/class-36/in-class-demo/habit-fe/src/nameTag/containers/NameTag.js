import React, { Component, useState } from 'react';
import InputColor from '../components/InputColor';
import InputText from '../components/InputText';
import Shape from '../components/Shape';
import { useNameTag } from '../hooks/nameTag';


export default function NameTag() {
  // const [text, setText] = useState('Your Name Here');
  // const [color, setColor] = useState('#FFFFFF');
  // const [backgroundColor, setBackgroundColor] = useState('#000000');

  // const stateFactoryMethod = {
  //   text: setText,
  //   color: setColor,
  //   backgroundColor: setBackgroundColor
  // };

  // const handleChange = ({ target }) => {
  //   stateFactoryMethod[target.name](target.value);
  // };

  const { text, color, backgroundColor, handleChange } = useNameTag({
    color: '#FF0000'
  });

  return (
    <>
      <InputText text={text} onChange={handleChange} />
      <InputColor color={color} backgroundColor={backgroundColor} onChange={handleChange} />
      <Shape text={text} color={color} backgroundColor={backgroundColor} />
    </>
  );
}

// export default class NameTag extends Component {
//   state = {
//     text: 'Your Name Here',
//     color: '#FFFFFF',
//     backgroundColor: '#000000'
//   }

//   handleChange = ({ target }) => {
//     this.setState({ [target.name]: target.value });
//   }

//   render() {
//     const { text, color, backgroundColor } = this.state;
//     return (
//       <>
//         <InputText text={text} onChange={this.handleChange} />
//         <InputColor color={color} backgroundColor={backgroundColor} onChange={this.handleChange} />
//         <Shape text={text} color={color} backgroundColor={backgroundColor} />
//       </>
//     );
//   }
// }
