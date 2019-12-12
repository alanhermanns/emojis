# Express Middleware

## Resources

* [Virtuals](https://mongoosejs.com/docs/guide.html#virtuals)
* [Middleware](https://expressjs.com/en/guide/writing-middleware.html)
* [Error Handling](https://expressjs.com/en/guide/error-handling.html)

## Agenda

* Virtuals
* What is middleware?
* Writing middleware
* Using middleware
* Error middleware

## Virtuals

Virtuals are fields that can be interacted with in JavaScript
but don't exist in the document in MongoDB.

### Get

```js
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  }
});

personSchema.virtuals('monthOfBirth').get(function() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const monthIndex = this.dob.getMonth();

  return months[monthIndex];
});

module.exports = mongoose.model('Person', personSchema);


// another file
Person
  .create({ name: 'ryan', dob: new Date('04-22-1987') })
  .then(person => {
    console.log(person.monthOfBirth)
  })
```

### Set

### Populate

## What is middleware?

Middleware is a function that is invoked between an incoming
request and an outgoing response.

## Writing middleware

Middleware always has the same signature:

```js
const myMiddleware = (req, res, next) => {};
```

Above `req` is the request object, `res` is the response object,
and `next` is a function that you invoke when your middleware is
done. `next` will then pass execution onto the next middleware.

## Using Middleware

Middleware is added with `.use`.

```js
app.use(myMiddleware);
```

You can also add middleware to specific paths:

```js
app.use('/my/path', myMiddleware);
```

Specific routes:

```js
app.use('/api/v1/resource', myMiddleware, resourceRoutes);
```

Specific methods:;

```js
module.exports = Router()
  .post('/', myMiddleware, (req, res) => {});
```

## Error Middleware

Error middleware is always the last middleware that
your express application adds.

Error middleware has the following signature:

```js
module.exports = (err, req, res, next) => {

};
```

The error middleware will be hit whenever one of your
routes throws an error. Additionally, the error middleware
is hit if you pass the `next` function any arguments.
