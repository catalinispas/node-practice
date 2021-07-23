const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to home page');
  }
  if (req.url === '/about') {
    res.end('Welcome to about page');
  }
  res.end(`
  <h1>Ooops</h1>
  <p>page not found</p>
  <a href="/">back home</a>
  `);
});

server.listen(5000);
