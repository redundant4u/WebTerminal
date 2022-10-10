import React, { useEffect } from 'react';
import Terminal from './WebTerminal';
import { SocketConfig } from '../../constants/SocketConfig';

import 'xterm/css/xterm.css';

const WebTerminal = ({ socket }: PropTypes) => {
    const style = {
        height: '100vh',
    };

    useEffect(() => {
        const terminal = new Terminal(socket);

        terminal.open(document.getElementById('terminal') as HTMLElement);
        terminal.fit();
    }, []);

    return <div id="terminal" style={style} />;
};

type PropTypes = {
    socket: SocketConfig;
};

export default WebTerminal;
