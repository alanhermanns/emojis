const fs = require('fs').promises;

async function reader() {
  // const colorsData = await fs.readFile('./Colors.js', 'utf8');
  // const colorsCopyData = await fs.readFile('./Colors-copy.js', 'utf8');

  const [colorsData, colorsCopyData] = await Promise.all([
    fs.readFile('./Colors.js', 'utf8'),
    fs.readFile('./Colors-copy.js', 'utf8')
  ]);

  console.log(colorsData, colorsCopyData);
}

Promise.reject('hi')
  .catch(hi => console.log(hi));

Promise.all([
  fs.readFile('./Colors.js', 'utf8'),
  fs.readFile('./Colors-copy.js', 'utf8')
])
  .then(([colorsData, colorsCopyData]) => {
    console.log('colors', colorsData);
    console.log('colors-copy', colorsCopyData);
  });

// fs.readFile('./Colors.jss', 'utf8')
//   .then(colorJsData => fs.readFile('./Colors-copy.js', 'utf8'))
//   .then(colorCopyJsData => console.log('done'))
//   .catch(err => console.error(err))
//   .finally(() => console.log('no matter what!'));

// fs.readFile('./Colors.js', 'utf8', (err, data) => {
//   console.log(data);
//   const removedLs = data.split('').map(letter => {
//     if(letter === 'l') return 'c';
//     return letter;
//   }).join('');

//   fs.writeFile('./Colors-copy.js', removedLs, err => {
//     if(err) {
//       console.log('oops');
//       return;
//     }
//     console.log('copied!');
//   });
// });

// console.log('hello');
