import reducer from './Reducer';
import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY } from '../action/actions';

describe('reduce', () => {
  it('return the right value', () =>{
    
    let state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    
    const coffeeAction = {
      type: DRINK_COFFEE, name: 'coffees', count: state.coffees
    };
    const snackAction = {
      type: EAT_SNACK, name: 'snacks', count: state.snacks
    };
    const napAction = {
      type: TAKE_NAP, name:'naps', count: state.naps
    };
    const studyAction = {
      type: STUDY, name:'study', count: state.studies
    };

    expect(reducer(state, coffeeAction)).toEqual({ 'coffees': 1, 'naps': 0, 'snacks': 0, 'studies': 0 });
    state = reducer(state, coffeeAction);
    expect(reducer(state, snackAction)).toEqual({ 'coffees': 1, 'naps': 0, 'snacks': 1, 'studies': 0 });
  });
})
;
