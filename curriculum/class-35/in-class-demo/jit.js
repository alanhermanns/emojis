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
