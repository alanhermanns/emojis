const sleep = require('./sleep');

async function waitASec() {
  const fulfilledValues = await Promise.all([
    sleep(1000),
    sleep(1000),
    sleep(1000)
  ]);

  console.log(fulfilledValues);
}

const myPromise = waitASec();
console.log('line 9', myPromise);
myPromise
  .then(() => console.log('line 11', myPromise))
