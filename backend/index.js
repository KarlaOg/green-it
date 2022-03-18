'use strict';

const express = require('express');

// Constants
const PORT = 3001;
const HOST = '127.0.0.1';
const app = express();
var cors = require('cors')
app.use(cors())

app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)



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



app.get('/city', async (req, res) => {
  const co = client.connect();
  const db = client.db("green-it");
  const testCollection = db.collection("data");
  // Il faut créer l'index pour dire a mongo qu'on peut chercher dedans 
  const indexResult = testCollection.createIndex({ Libcom: 'text' })
  // la query avec le parametre city?=laville
  const query = { $text: { $search: req.query.q } };
  // On a besoins pour avoir les champs qu'on veut dans le resultat de la requete 
  const projection = { 
    Libcom: 1, 
    Libreg:1, Libdep :1 , 
    "SCORE GLOBAL departement 1" :1 ,
    "SCORE GLOBAL region 1": 1 , 
    "ACCÈS AUX INTERFACES NUMERIQUES": 1, 
    "ACCES A L'INFORMATION": 1,
    "COMPETENCES ADMINISTATIVES": 1,
    "COMPÉTENCES NUMÉRIQUES / SCOLAIRES": 1
  };
  // Va chercher le resultat de la query avec les champs qu'on veut 
  const cursor = testCollection.find(query).project(projection); 
  const allVal = await cursor.toArray(); 
  console.log(typeof allVal)

  // console.log(allVal);
  res.send(JSON.stringify(allVal)) 
})


// Connection URL

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

