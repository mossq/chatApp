import io from 'socket.io-client';

function Client() {
    // TODO add emits and event handlers
    const socket = io.connect('http://localhost:3001');

    return socket;
}

export default Client;

/*import io from "socket.io-client";
let socket = io("http://localhost:8000/chat");
export default socket;*/