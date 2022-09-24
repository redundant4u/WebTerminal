import React from 'react';
import WebTerminal from 'WebTerminal';

import '../lib/node_modules/xterm/css/xterm.css';

const App = () => {
    return (
        <div className="App">
            <WebTerminal />
        </div>
    );
};

export default App;
