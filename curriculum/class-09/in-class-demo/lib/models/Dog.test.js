const Dog = require('./Dog');
describe('Dog model', () => {
  it('has an age get virtual', () => {
    const dog = new Dog({
      name: 'spot',
      dob: new Date('2014-12-12T00:00:00'),
      weight: '20 lbs'
    });

    expect(dog.age).toEqual(5);
  });

  it('has an age set virtual', () => {
    const dog = new Dog({
      name: 'spot',
      dob: new Date('2014-12-12T00:00:00'),
      weight: '20 lbs'
    });

    dog.age = 7;

    expect(dog.dob).toEqual(new Date('2012-12-12T00:00:00'));
  });
});
