const net = require('net');

const client = net.connect(7890, () => {
  console.log('connected to server');

  client.write('Whats up server!');

  client.on('data', data => {
    console.log(data.toString());
  });
});
