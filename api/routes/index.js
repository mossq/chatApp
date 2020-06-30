var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/**  Express  **/

/* GET home page. */
router.get('/', function (req, res, next) {
	res.send('Hello World from the router!');
});


/**  Socket.io  **/

let roomSocket;

var room = function (io) {
	console.log("Initializing index room");

	testMongo();
	io.on('connection', handleConnectionEvent);
};

function handleConnectionEvent(socket) {
	roomSocket = socket;
	console.log("A user connected to index room");


	roomSocket.on("msgsent", handleMessageSentEvent);
}

function handleMessageSentEvent(message) {
	console.log("Message received on server (index): " + message);

	roomSocket.emit("msgsent", message);
}

function testMongo() {
	MongoClient.connect(url,
		{ useUnifiedTopology: true },
		function (err, db) {
			if (err) throw err;

			var dbo = db.db("main");
			var query = {}; // { address: "Park Lane 38" };

			dbo.collection("users").find(query).toArray(function (err, result) {
				if (err) throw err;

				console.log(result);
				db.close();
			});
		});
}

module.exports = { router, room };