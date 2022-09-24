import React, { useEffect } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

const CloudShell = () => {
    useEffect(() => {
        const terminal = new Terminal();
        terminal.open(document.getElementById('terminal') as HTMLElement);
    }, []);

    return <div id="terminal" />;
};

export default CloudShell;
