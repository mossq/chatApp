const app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var cors = require("cors");
const port = 3001

app.use(cors());

/*
 Add API routes here
*/
var indexRouter = require('./routes/index');
var testAPIRouter = require('./routes/testAPI');

app.use('/', indexRouter);
app.use('/testapi', testAPIRouter);

io.on('connection', function (socket) {
    console.log('a user connected');
});

http.listen(port, () => console.log(`Example app listening on port ${port}!`))
