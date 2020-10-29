const express = require('express');
const bodyParser = require('body-parser');
const cors = require ("cors")
const app = express();
const mysql = require ('mysql');
const { restart } = require('nodemon');

 const db = mysql.createPool({
   host: '',
   user: 'root',
   password: 'root',
   database: 'FvtSdhvyMr',
  });
  
   app.use(cors());
   app.use(express.json());
   app.use(bodyParser.urlencoded({extended: true}));


   app.get('/api/get', (req, res) => {
    
    const sqlSelect = 
    "SELECT * FROM tipousuario" ;
    db.query(sqlSelect, (err, result)=>{
        res.send(result);
      //console.log(result);           
     });
    });

    app.get('/api/get2', (req, res) => {
    
      const sqlSelect = 
      "SELECT * FROM usuario" ;
      db.query(sqlSelect, (err, result)=>{
          res.send(result);
        //console.log(result);           
       });
      });

     


   app.post('/api/insert', (req, res) => {
     const movieName = req.body.movieName;
     const movieReview = req.body.movieReview;

    const sqlInsert = "INSERT INTO movie_review( movieName, movieReview ) VALUES (?,?)";
    db.query(sqlInsert, [movieName, movieReview], (err, result)=>{

        console.log(result);             
      });
     });

     

  app.listen(3001, ()=>{
  console.log('running on port 3001');
  });