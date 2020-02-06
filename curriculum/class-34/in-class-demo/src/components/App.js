import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Characters from './characters/Characters';
import CharacterDetail from './characters/CharacterDetail';
import Flex from './flex/Flex';
import Sidebar from './sidebar/Sidebar';
import { If } from './conditionals/If';
import RadioOption from './radios/RadioOption';
import RadioGroup from './radios/RadioGroup';

const Parent = ({ children }) => (
  <>
    {children}
  </>
);

Parent.propTypes = {
  children: PropTypes.node
};

export default function App() {
  const [number, setNumber] = React.useState(0);
  const [dog, setDog] = React.useState('rover');
  const [buttons, setButtons] = React.useState([
    <RadioOption value="spot">Spot</RadioOption>,
    <RadioOption value="rover">Rover</RadioOption>,
    <RadioOption value="max">Max</RadioOption>,
    <RadioOption value="fido">Fido</RadioOption>
  ]);

  const addRadioButton = ({ target }) => {
    setButtons(oldButtons => [...oldButtons, <RadioOption value="Hi">Hi</RadioOption>]);
  };

  const handleChange = ({ target }) => setDog(target.value);

  return (
    <Router>
      <button onClick={addRadioButton}>Add</button>
      <RadioGroup name="dog" checked={dog} onChange={handleChange}>
        {buttons}
      </RadioGroup>
      <button onClick={() => setNumber(num => num + 1)}>Inc</button>
      <If condition={number === 1}>
        <h1>That is small</h1>
      </If>
      <If condition={number > 1 && number < 10}>
        <h1>That is ok</h1>
      </If>
      <If condition={number >= 10}>
        <h1>That is big</h1>
      </If>
      <Flex>
        <p>hello</p>
        <p>Everyone</p>
        <p>yo</p>
        <p>ya</p>
        <p>ok</p>
        <p>!!!!!</p>
        <p>spot</p>
      </Flex>

      <Flex title="Cool Wolves">
        <img src="https://i.pinimg.com/originals/52/5a/3a/525a3a2e917c0b5a3511a42ad23966ed.jpg" />
        <img src="https://ih1.redbubble.net/image.509463701.1253/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" />
        <img src="https://images-na.ssl-images-amazon.com/images/I/71FI8UiDcnL._AC_SY355_.jpg" />
        <img src="https://www.chloesplace.co.uk/kitten-01.jpg" />
      </Flex>

      <Flex>
        <CharacterDetail match={{ params: { id: '1' } }} />
        <CharacterDetail match={{ params: { id: '2' } }} />
        <CharacterDetail match={{ params: { id: '3' } }} />
        <CharacterDetail match={{ params: { id: '4' } }} />
        <CharacterDetail match={{ params: { id: '5' } }} />
      </Flex>
    </Router>
  );
}

// export default function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Characters} />
//         <Route path="/character/:id" component={CharacterDetail} />
//       </Switch>
//     </Router>
//   );
// }
