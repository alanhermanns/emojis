import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import reducer from '../reducers/Reducer';
import { DRINK_COFFEE,
  drinkCoffee,
  EAT_SNACK,
  eatSnack,
  TAKE_NAP,
  takeNap,
  STUDY,
  study } from '../action/actions';

let verbs;
let types;

verbs = [drinkCoffee, eatSnack, takeNap, study];
types = [DRINK_COFFEE, EAT_SNACK, TAKE_NAP,
  STUDY];

const isTired = state => state.coffees < 1 && state.naps < 1;
const isHyper = state => state.coffees > 3;
const isEducated = state => state.studies > 2;
const isHungry = state => state.snacks < 1;
  
const getFace = state => {
  if(isTired(state) && isHungry(state)) return '😠';
  if(isHyper(state) && isHungry(state)) return '😱';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '😲';
  if(isHungry(state)) return '😡';
    
  return '😀';
};
  
const Moods = () => {
  
  const [state, dispatch] = useReducer(reducer, {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0
  });

  const face = getFace(state);
  const stateKeys = Object.keys(state);
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
