var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
const findDocuments = function(db) {
  // Get the documents collection
  const collection = db.collection('documents');

  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    console.log("Found the following records");
    console.log(docs);
  });
}
 
// Use connect method to connect to the server
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
 
  const db = client.db("SDGRER");

  findDocuments(db);
  client.close();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("API is working properly");
});

module.exports = router;