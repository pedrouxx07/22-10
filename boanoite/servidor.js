const http = require('http');
const app = require('./app');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
res.end("o valor da soma é:" + somar + "e o valor da divisão é:" + dividir);    
});

server.listen(3006, () => {
    console.log('Rodando no http://localhost:3006/');
});
