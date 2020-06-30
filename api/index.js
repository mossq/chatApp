const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require("cors");
const port = 3001

app.use(cors());


// Add API routes here
const { router: indexRouter, room: indexRoomAPI } = require('./routes/index');
const { router: chatRouter, room: chatRoomAPI } = require('./routes/chat');

app.use('/', indexRouter);
app.use('/chat', chatRouter);


// Initialize Socket.io connections to specific endpoints
const index = io.of('/');
indexRoomAPI(index);

const chat = io.of('/chat');
chatRoomAPI(chat);


// Connect/disconnect events control
io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});


// Start listening
http.listen(port, () => console.log(`Chat app listening on port ${port}!`))