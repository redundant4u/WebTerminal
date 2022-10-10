import React from 'react';
import WebTerminal from 'WebTerminal';

import '../lib/node_modules/xterm/css/xterm.css';
import SocketConfig from './config/SocketConfig';

const App = () => {
    const socketConfig = new SocketConfig();

    return (
        <div className="App">
            <WebTerminal socket={socketConfig} />
        </div>
    );
};

export default App;
