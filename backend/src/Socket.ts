import { Server } from 'socket.io';
import http from 'http';
import Pty from './Pty';

class Socket {
    pty: Pty;

    attach(server: http.Server) {
        if (!server) {
            throw new Error('Server Not Found');
        }

        const io = new Server(server, {
            cors: {
                origin: '*',
                methods: ['GET', 'POST'],
            },
        });

        io.on('connection', (socket) => {
            console.log('Socket Connected: ', socket.id);

            this.pty = new Pty(socket);

            socket.on('disconnect', () => {
                console.log('Socket Disconnected: ', socket.id);
            });
            socket.on('input', (input: string) => {
                this.pty.write(input);
            });
        });
    }
}

export default Socket;
