'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '127.0.0.1';
const app = express();
var cors = require('cors')
app.use(cors())

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'green-it';

let db;

MongoClient.connect(url, function (err, client) {
  console.log("Connected successfully to server");
  db = client.db(dbName);
});


app.get('/', (req, res) => {
  db.collection("data").find({}).toArray(function (err, result) {
    if (err) {
      res.send(err);
    } else {

      res.send(JSON.stringify(result));
    }
  })
});





// Connection URL

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

