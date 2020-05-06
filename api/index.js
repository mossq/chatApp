const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient;
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
    console.log("Connection!");
    socket.on('sendMessage', (message) => {
        io.emit('message', message)
    })
});

http.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Connection URL
const url = 'mongodb://localhost:27017/';
 
const findDocuments = function(db,client) {
  // Get the documents collection
  var collection = db.collection('number1');
  
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
     if(err) throw err;

    console.log("Found the following records");
    console.log(docs);
    client.close();
  });
}
 
// Use connect method to connect to the server
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
 
  var db = client.db("QWERTY");

  findDocuments(db,client);
});
