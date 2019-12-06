

const process = require('process');

// 0 1 1 2 3 5 8 13
function fib(n) {
  if(n === 0) return 0;
  if(n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
}

// const start = process.hrtime.bigint();
// console.log(fib(45));
// console.log((process.hrtime.bigint() - start));

// 5! = 5 * 4 * 3 * 2 * 1
function factorial(n) {
  if(n === 1) return 1;
  return n * factorial(n - 1);
}

const avgTime = [...Array(1000)]
  .fill(30)
  .map(n => {
    const start = process.hrtime.bigint();
    fib(n);
    const end = process.hrtime.bigint();
    return end - start;
  })
  .reduce((acc, time) => {
    return acc + time;
  });

console.log(Number(avgTime.toString()) / 1000);
