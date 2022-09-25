import { ITerminalOptions, Terminal as xterm } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';

export default class Terminal {
    term: xterm;

    _options: ITerminalOptions = {
        cursorBlink: true,
        scrollSensitivity: 2,
    };
    _fitAddon: FitAddon;

    constructor() {
        this.term = new xterm(this._options);
        this._fitAddon = new FitAddon();

        this._initWebTerminal();
    }

    open(element: HTMLElement) {
        this.term.open(element);
    }

    fit() {
        this._fitAddon.fit();
    }

    _initWebTerminal() {
        this.term.onData((e) => this._onDataHandler(e));
        this.term.onKey((e) => this._onKeyHandler(e));

        this.term.loadAddon(this._fitAddon);
    }

    _onDataHandler(e: string) {
        this.term.write(e);
    }

    _onKeyHandler(e: { domEvent: KeyboardEvent }) {
        const key = e.domEvent.key;

        console.log(key);

        if (key === 'Enter') {
            this._enter();
        }
    }

    _enter() {
        this.term.writeln('');
    }
}
