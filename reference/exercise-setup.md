# Exercise Stepup

* `npm init -y`
* `npm i -D jest @types/jest eslint`
* in package.json add scripts:

```js
{
  "scripts": {
    "test": "jest --verbose",
    "test:watch": "npm run test -- --watchAll --coverage"
  }
}
```
