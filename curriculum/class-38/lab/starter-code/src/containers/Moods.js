import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import reducer from '../reducers/Reducer';
import {
  drinkCoffee,
  eatSnack,
  takeNap,
  study } from '../action/actions';
import { getFace } from '../selectors/selector'; 

let verbs;

verbs = [drinkCoffee, eatSnack, takeNap, study];
  
  
const Moods = () => {
  
  const [state, dispatch] = useReducer(reducer, {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0
  });

  const face = getFace(state);
  const actionHandlers = verbs.map(verb => [verb(state).name, () => dispatch(verb(state)), verb(state).count]);
  console.log(actionHandlers);
  return (
      <>
        <Controls handlers={actionHandlers} />
        <Face emoji={face} />
      </>
  );
};

export default Moods;
