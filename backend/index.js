const http = require('http');

const server = http.createServer((_, res) => res.end());
const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

process.on('uncaughtException', (err) => {
    console.log(`UNCAUGHT EXCEPTION! ${err.name}: ${err.message}`);
    process.exit(1);
});

process.on('SIGTERM', () => {
    console.log('SIGTERM RECEIVED.');
    server.close();
});
