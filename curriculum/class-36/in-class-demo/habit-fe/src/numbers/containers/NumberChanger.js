import React from 'react';
import NumberDisplay from '../components/numbers/NumberDisplay';
import IncrementNumber from '../components/numbers/IncrementNumber';
import { useNumber } from '../hooks/number';

export default function NumberChanger() {
  // const [number, setNumber] = useState(5);

  // const increment = () => {
  //   setNumber(prevNumber => prevNumber + 1);
  // };

  const { number, increment } = useNumber(7);

  return (
    <>
      <NumberDisplay number={number} />
      <IncrementNumber increment={increment} />
    </>
  );
}

// export default class NumberChanger extends Component {
//   state = {
//     number: 5
//   }

//   increment = () => {
//     this.setState(prevState => ({ number: prevState.number + 1 }));
//   }

//   render() {
//     const { number } = this.state;
//     return (
//       <>
//         <NumberDisplay number={number} />
//         <IncrementNumber increment={this.increment} />
//       </>
//     );
//   }
// }
