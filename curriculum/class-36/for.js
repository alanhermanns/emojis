// this is a warm up! do it now =)
// what will happen here?
// what will print to the screen

one: for(let i = 0; i < 10; i++) {
  two: for(let j = 0; j < 10; j++) {
    if(i === 1) {
      break one;
    }

    if(j === 5) {
      break two;
    }

    console.log(i, j);
  }
}
// 0 0
// 0 1
// 0 2
// 0 3
// 0 4
