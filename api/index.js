var cors = require('cors')
const express = require("express");
const dbo = require("./db/db");
const app = express();
app.use(cors())
const port = 4444;

dbo.connectToServer();


app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
});
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const jsonParser = bodyParser.json();

/*
suite du code ici
*/
/* index.js code before... */
app.get("/Pokemon/list", function (req, res) {
    //on se connecte à la DB MongoDB
    const dbConnect = dbo.getDb();
    //premier test permettant de récupérer mes pokemons !
    dbConnect
      .collection("Pokemon")
      .find({}) // permet de filtrer les résultats
      /*.limit(50) // pourrait permettre de limiter le nombre de résultats */
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching pokemons!");
        } else {
          res.json(result);
        }
      });
      
  });
  app.post('/Pokemon/insert',jsonParser, (req, res) => {
    const body = req.body;
    console.log('Got body:', body);
    //on code ensuite l'insertion dans mongoDB, lisez la doc hehe !!
    const dbConnect = dbo.getDb();
    //premier test permettant de récupérer mes pokemons !
    dbConnect
        .collection("Pokemon")
        .insertOne({...body})
    res.json(body);
    dbConnect
        .updateOne({id:"004"},{$set:{name:"Mewtwo"}});
    
  });
  app.delete('/Pokemon/insert',jsonParser,(req,res)=>{
    const body= req.body;
    const dbConnect = dbo.getDb();
    dbConnect 
        .collection("Pokemon")
        .deleteOne({...body})
    res.json(body);

  });
  app.get("/Pokedex/list", function (req, res) {
    //on se connecte à la DB MongoDB
    const dbConnect = dbo.getDb();
    //premier test permettant de récupérer mes pokemons !
    dbConnect
      .collection("Pokedex")
      .find({}) // permet de filtrer les résultats
      /*.limit(50) // pourrait permettre de limiter le nombre de résultats */
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching pokemons!");
        } else {
          res.json(result);
        }
      });
      
  });
  app.post('/Pokedex/insert',jsonParser, (req, res) => {
    const body = req.body;
    console.log('Got body:', body);
    //on code ensuite l'insertion dans mongoDB, lisez la doc hehe !!
    const dbConnect = dbo.getDb();
    //premier test permettant de récupérer mes pokemons !
    dbConnect
        .collection("Pokedex")
        .insertOne({...body})
    res.json(body);  
  });
  app.delete('/Pokedex/insert',jsonParser,(req,res)=>{
    const body= req.body;
    const dbConnect = dbo.getDb();
    dbConnect 
        .collection("Pokedex")
        .deleteOne({...body})
    res.json(body);

  });