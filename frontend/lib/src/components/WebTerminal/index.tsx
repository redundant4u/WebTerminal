import React, { useEffect } from 'react';
import Terminal from './WebTerminal';

import 'xterm/css/xterm.css';

const WebTerminal = () => {
    const style = {
        height: '100vh',
    };

    useEffect(() => {
        const terminal = new Terminal();

        terminal.open(document.getElementById('terminal') as HTMLElement);
        terminal.fit();
    }, []);

    return <div id="terminal" style={style} />;
};

export default WebTerminal;
