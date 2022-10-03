import { Terminal as xterm } from 'xterm';

declare const WebTerminal: (param: {
    socket: {
        init: (term: xterm) => void;
        execute: (command: string) => void;
    };
}) => React.ReactElement;

export default WebTerminal;
