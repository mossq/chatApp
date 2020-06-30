var express = require('express');
var router = express.Router();

/**  Express  **/

/* GET home page. */
router.get('/', function (req, res, next) {
	res.send('Welcome to the chat router.');
});


/**  Socket.io  **/

let roomSocket;

var room = function (io) {
	console.log("Initializing chat room");

	io.on('connection', handleConnectionEvent);
};

function handleConnectionEvent(socket) {
	roomSocket = socket;
	console.log("A user connected to chat room");

	roomSocket.on("msgsent", handleMessageSentEvent);
}

function handleMessageSentEvent(message) {
	console.log("Message received on server (chat): " + message);

	roomSocket.emit("msgsent", message);
}


module.exports = { router, room };