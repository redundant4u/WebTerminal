import { createServer } from 'http';
import Socket from './Socket';

const server = createServer((_, res) => res.end());
const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);

    const socket = new Socket();
    socket.attach(server);
});

process.on('uncaughtException', (err) => {
    console.log(`UNCAUGHT EXCEPTION! ${err.name}: ${err.message}`);
    process.exit(1);
});

process.on('SIGTERM', () => {
    console.log('SIGTERM RECEIVED.');
    server.close();
});
