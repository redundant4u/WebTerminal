import { ITerminalOptions, Terminal as xterm } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { SocketConfig } from '../../constants/SocketConfig';

export default class Terminal {
    term: xterm;
    _options: ITerminalOptions = {
        cursorBlink: true,
        scrollSensitivity: 2,
        allowProposedApi: true,
    };
    _fitAddon: FitAddon;
    _input: number;
    _socket: SocketConfig;

    constructor(socket: SocketConfig) {
        this.term = new xterm(this._options);
        this._fitAddon = new FitAddon();
        this._input = 0;

        this._socket = socket;
        this._socket.init(this.term);

        this._initWebTerminal();
    }

    open(element: HTMLElement) {
        this.term.open(element);
    }

    fit() {
        this._fitAddon.fit();
    }

    _initWebTerminal() {
        this.term.onKey((e) => this._onKeyHandler(e));
        this.term.onData((e) => this._onDataHandler(e));
        this.term.loadAddon(this._fitAddon);
    }

    _onKeyHandler(e: { key: string; domEvent: KeyboardEvent }) {
        const printable: boolean = !e.domEvent.altKey && !e.domEvent.ctrlKey && !e.domEvent.metaKey;

        if (e.domEvent.key === 'Enter') {
            this._enter();
        } else if (e.domEvent.key === 'Backspace') {
            this._backSpace();
        } else if (e.domEvent.key === 'ArrowRight') {
            this._moveRight();
        } else if (e.domEvent.key === 'ArrowLeft') {
            this._moveLeft();
        } else if (printable) {
            this._input++;
        }
    }

    _onDataHandler(e: string) {
        this._socket.execute(e);
    }

    _enter() {
        this._input = 0;
    }

    _backSpace() {
        if (this.term.buffer.active.cursorX >= 10) {
            this.term.write('\x1B[0J');
            this._input--;
        }
    }

    _moveRight() {
        const isEnd: boolean = this.term.buffer.active.cursorX - 10 <= this._input;
        if (!isEnd) {
            this.term.write('\x1B[C');
        }
    }

    _moveLeft() {
        const isStart: boolean = this.term.buffer.active.cursorX >= 10;
        if (!isStart) {
            this.term.write('\x1B[D');
        }
    }
}
