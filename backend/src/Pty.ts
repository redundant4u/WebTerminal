import os from 'os';
import { spawn, IPty } from 'node-pty';
import { Socket as SocketIO } from 'socket.io';

class Pty {
    socket: SocketIO;
    ptyProcess: IPty;
    shell: string;

    constructor(socket: SocketIO) {
        this.socket = socket;
        this.shell = os.platform() === 'win32' ? 'cmd.exe' : 'bash';

        this.init();
    }

    init() {
        this.ptyProcess = spawn(this.shell, [], {
            name: 'xterm-color',
            cwd: process.env.HOME,
            env: process.env as { [key: string]: string },
        });

        this.ptyProcess.onData((data) => {
            this.send(data);
        });
    }

    write(data: string) {
        this.ptyProcess.write(data);
    }

    send(data: string) {
        this.socket.emit('output', data);
    }
}

export default Pty;
