import React from 'react';
import CloudShell from 'CloudShell';

import '../lib/node_modules/xterm/css/xterm.css';

const App = () => {
    return (
        <div className="App">
            <CloudShell />
        </div>
    );
};

export default App;
