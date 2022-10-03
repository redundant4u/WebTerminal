import os from 'os';
import pty from 'node-pty';
import { Socket as SocketIO } from 'socket.io';

class Pty {
    socket: SocketIO;
    pty: pty.IPty;
    shell: string;

    constructor(socket: SocketIO) {
        this.socket = socket;
        this.shell = os.platform() === 'win32' ? 'cmd.exe' : 'bash';

        this.initPty();
    }

    initPty() {
        this.pty = pty.spawn(this.shell, [], {
            name: 'xterm-color',
            cwd: process.env.HOME,
            // env: process.env,
        });

        this.pty.onData((data) => {
            this.send(data);
        });
    }

    write(data: string) {
        this.pty.write(data);
    }

    send(data: string) {
        this.socket.emit('output', data);
    }
}

export default Pty;
