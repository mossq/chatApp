import io from "socket.io-client";


let socket = io("http://localhost:3001/chat");
socket.on("msgsent", handleMessageSentEvent);

export default socket;