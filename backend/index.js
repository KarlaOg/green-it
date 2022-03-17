'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '127.0.0.1';
const app = express();
var cors = require('cors')
app.use(cors())

const MongoClient = require('mongodb').MongoClient
, assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'green-it';

let db
// const foo = async () => {
//   const result =  await db.collection("data").createIndex({Libcom:1, Libdep:1 , Libreg:1}); 
//   console.log(`Index created: ${result}`);
// } 

MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  db = client.db(dbName);
});


app.get('/', async (req, res )  =>  {
  const city =  await db.collection("data").find( {$text: { $search: req.query.city} })
  res.render("res")
 
});

 


  
// Connection URL


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

