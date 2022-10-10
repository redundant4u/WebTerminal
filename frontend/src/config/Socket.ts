import { io, Socket as SocketIOClient } from 'socket.io-client';
import { Terminal as xterm } from 'xterm';

class SocketConfig {
    socket: SocketIOClient;
    url: string;

    constructor() {
        this.url =
            process.env.REACT_APP_SOCKET_URL === undefined
                ? 'http://localhost:3001/'
                : process.env.REACT_APP_SOCKET_URL;

        this.socket = io(this.url, {
            transports: ['websocket'],
        });
    }

    init(term: xterm) {
        this.socket.on('output', (message) => {
            term.write(message);
        });
    }

    execute(command: string) {
        this.socket.emit('input', command);
    }
}

export default SocketConfig;
