import io from 'socket.io-client';

function Client() {
    // TODO add emits and event handlers
    var socket = io.connect('http://localhost:3001');

    return socket;
}

export default Client;