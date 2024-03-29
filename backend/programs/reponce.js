const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome home');
    //console.log(req.query);
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to About Us page');
  } else if (url === '/node') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to my Node.js project');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Page not found');
  }
});

//const PORT = 4000;
server.listen(4000)