const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require("cors");
const port = 3001

app.use(cors());

/*
 Add API routes here
*/
const indexRouter = require('./routes/index');
const testAPIRouter = require('./routes/testAPI');

app.use('/', indexRouter);
app.use('/testapi', testAPIRouter);

io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on("msgsent", function (msg) {
        handleMessageSentEvent(msg);

        socket.emit("msgsent", msg);
    });

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

http.listen(port, () => console.log(`Example app listening on port ${port}!`))

function handleMessageSentEvent(message) {
    console.log("Message received on server: " + message);
}
