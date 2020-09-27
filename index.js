var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const { config } = require('./config/index');

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});


io.on('connection', (socket) => {
  console.log(`Tested on http://localhost:${config.port}/socket.io/?EIO=3&transport=websocket`);
  console.log('a user connected');
});

http.listen(config.port, () => {
  console.log(`Listenig on port http://localhost:${config.port}`);
});

