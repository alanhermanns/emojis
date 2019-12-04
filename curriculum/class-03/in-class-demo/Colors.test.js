const Colors = require('./Colors');

describe('Color', () => {
  let colors;
  beforeEach(() => {
    colors = new Colors();
  });

  it('has a colors property', () => {
    expect(colors.colors).toEqual([]);
  });

  it('has a add method that adds a color to the colors property', () => {
    colors.add('red');
    expect(colors.colors).toEqual(['red']);
  });

  it('has a has method that checks if a color exists in colors property', () => {
    colors.add('red');

    expect(colors.has('red')).toBeTruthy();
    expect(colors.has('blue')).toBeFalsy();
  });

  it('has no duplicates in the colors property', () => {
    colors.add('red');
    colors.add('red');

    expect(colors.colors).toEqual(['red']);
  });
});
