const net = require('net');

const server = net.createServer(connectedClient => {
  console.log('client connected');

  connectedClient.on('data', data => {
    console.log(data.toString());
  });

  connectedClient.write('Hi client');
  connectedClient.end('bye!');
});

server.listen(7890, () => {
  console.log('7890');
});
