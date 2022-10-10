import { Terminal as xterm } from 'xterm';

export type SocketConfig = {
    init: (term: xterm) => void;
    execute: (command: string) => void;
};
