import { getFace } from './selector'
;
describe('get face', () => {
  it('should get the right face', () =>{

    // const angry = '😠';
    // const perturbed = '😱';
    // const sleepy = '😴';
    // const cat = '🙀';
    // const whoa = '😲';
    // const mad = '😡';

    let state = {
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    expect(getFace(state)).toEqual('😠');
    state = {
      coffees: 4,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    expect(getFace(state)).toEqual('😱');
    state = {
      coffees: 4,
      snacks: 0,
      naps: 0,
      studies: 2
    };
    expect(getFace(state)).toEqual('😱');
    state = {
      coffees: 4,
      snacks: 0,
      naps: 0,
      studies: 0
    };
    expect(getFace(state)).toEqual('😱');
    state = {
      coffees: 0,
      snacks: 3,
      naps: 0,
      studies: 0
    };
    expect(getFace(state)).toEqual('😴');

  });
});
