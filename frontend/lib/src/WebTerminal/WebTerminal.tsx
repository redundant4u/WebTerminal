import React, { useEffect } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';

import 'xterm/css/xterm.css';

const WebTerminal = () => {
    const style = {
        height: '100vh',
    };

    useEffect(() => {
        const terminal = new Terminal({
            cursorBlink: true,
        });
        const fitAddon = new FitAddon();

        terminal.loadAddon(fitAddon);
        terminal.open(document.getElementById('terminal') as HTMLElement);

        terminal.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');

        fitAddon.fit();
        console.log('fit!');
    }, []);

    return <div id="terminal" style={style} />;
};

export default WebTerminal;
