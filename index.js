var app = require('express')();
var http = require('http').createServer(app);

const { config } = require('./config/index');

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

app.listen(config.port, () => {
  console.log(`Listenig on port http://localhost:${config.port}`);
});