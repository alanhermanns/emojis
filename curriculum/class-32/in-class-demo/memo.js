function add(a, b) {
  console.log('We are in the add function. Calculating.....');
  return a + b;
}

const memoAdd = memoize(add);

console.log(memoAdd(3, 2));
console.log(memoAdd(3, 2));
console.log(memoAdd(3, 2));
console.log(memoAdd(5, 2));
console.log(memoAdd(3, 2));


// closure
function memoize(fn) {
  let previousArgs = null;
  let previousResult = null;

  // add(3, 2) -> args === [3, 2]
  return function(...args) {
    if(!(previousArgs && previousArgs.length === args.length && args.every((arg, i) => arg === previousArgs[i]))) {
      previousArgs = args;
      // args === [3, 2] -> add(3, 2)
      previousResult = fn(...args);
    }
    return previousResult;
  };
}
