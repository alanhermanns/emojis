const Note = require('./Note');

describe('Note model', () => {
  it('has a required title', () => {
    const note = new Note({});

    const { errors } = note.validateSync();

    expect(errors.title.message).toEqual('Path `title` is required.');
  });

  it('has a title less than or equal to 10 characters', () => {
    const note = new Note({
      title: 'a'.repeat(11)
    });

    const { errors } = note.validateSync();

    expect(errors.title.message).toEqual('Path `title` (`aaaaaaaaaaa`) is longer than the maximum allowed length (10).');
  });

  it('has a required body field', () => {
    const note = new Note({});

    const { errors } = note.validateSync();

    expect(errors.body.message).toEqual('Path `body` is required.');
  });

  it('has a body less than or equal to 200 characters', () => {
    const note = new Note({
      body: 'a'.repeat(201)
    });

    const { errors } = note.validateSync();

    expect(errors.body.message).toEqual('Path `body` (`aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`) is longer than the maximum allowed length (200).');
  });
});
