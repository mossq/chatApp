import io from 'socket.io-client';

function handleMessageSentEvent(message) {
    console.log("Message received on client: " + message);
}

let socket = io("http://localhost:3001/chat");
socket.on("msgsent", handleMessageSentEvent);

export default socket;