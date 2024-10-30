// import * as http from 'http';

// const hostname: string = '127.0.0.1';
// const port: number = 3000;

// const server = http.createServer(function(req, res) {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello world , TypeScript Node. Js HTTP Server!\n');
// });

// server.listen( port, hostname, function() {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });



//change same code
import { IncomingMessage, ServerResponse } from 'http';
import * as http from 'http';

const hostname: string = '127.0.0.1';
const port: number = 3000;

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello, TypeScript Node. js HTTP Server with types!\n');
});

server.listen(port, hostname, function () {
console.log(`Server running at http://${hostname}:${port}/`);
});