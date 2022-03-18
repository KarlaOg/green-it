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

let db
// const foo = async () => {
//   const result =  await db.collection("data").createIndex({Libcom:1, Libdep:1 , Libreg:1}); 
//   console.log(`Index created: ${result}`);
// } 

MongoClient.connect(url, function (err, client) {
  console.log("Connected successfully to server");
  db = client.db(dbName);
  // foo(); 
});


app.get('/',  (req, res )  =>  {
  console.log(req.query.city); 
  const city =  db.collection("data").find( {Libcom : req.query.city} )
  res.send(city)
  // console.log(city)
 
});

 


  
// Connection URL


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

