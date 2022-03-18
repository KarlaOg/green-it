'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '127.0.0.1';
const app = express();
var cors = require('cors')
app.use(cors())



// app.get('/', (req, res) => {
//   db.collection("data").find({}).toArray(function (err, result) {
//     if (err) {
//       res.send(err);
//     } else {

//       res.send(JSON.stringify(result));
//     }
//   })
// });


const { MongoClient } = require('mongodb');
const connection = "mongodb://localhost:27017";
const client = new MongoClient(connection);



app.get('/city', (req, res) => {
 
  const co = client.connect();
  const db = client.db("green-it");
  const testCollection = db.collection("data"); 
  // const indexResult =  testCollection.createIndex({ Libcom: 'text', Libreg: 'text', Libdeg: 'text' })
  // console.log(indexResult)
  const query = { $text: { $search:req.query.q } };
    const projection = { Libcom: 1};
    const cursor = testCollection
      .find(query)
      .project(projection);
    cursor.forEach(console.dir);
})


// Connection URL

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

