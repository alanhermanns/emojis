import React, { Suspense, useState } from 'react';

const useArray = arr => {
  const [arrState, setArrState] = useState(arr);

  return new Proxy(arrState, {
    set(a, index, value) {
      if(index >= a.length) {
        setArrState(oldArr => [...oldArr, value]);
      } else {
        setArrState(oldArr => oldArr.map((item, i) => {
          if(i === index) return value;
          return item;
        }));
      }
      return true;
    }
  });
};

const obj = new Proxy({
  name: 'spot'
}, {
  get(target, prop) {
    if(!target[prop]) throw 'No prop';
    return target[prop];
  },
  set() {
    throw 'Dont change this object';
  }
});

obj.name = 'spot';


export default function App() {
  const arr = useArray([2, 3, 4]);
  return (
    <>
      <button onClick={() => arr.push(1)}></button>
      {
        arr.map(item => <p>{item}</p>)
      }
    </>
  );
}
