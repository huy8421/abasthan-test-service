const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ok - abasthan test service\n');
});
server.listen(port, '0.0.0.0', () => {
  console.log('listening on ' + port);
});
process.on('SIGTERM', () => { server.close(() => process.exit(0)); });
