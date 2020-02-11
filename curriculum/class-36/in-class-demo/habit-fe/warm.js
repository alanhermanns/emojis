const curry = fn => {

  return function curryRec(arg) {
    const args = [arg];
    return function curryRecRec(arg) {
      if(arg === undefined) return fn(...args);
      args.push(arg);

      return curryRecRec;
    };

  };
};

const add = (...args) => args.reduce((acc, n) => acc + n);

const curryAdd = curry(add);

console.log(curryAdd(5));
console.log(curryAdd(5)(3));
console.log(curryAdd(5)(3)());
