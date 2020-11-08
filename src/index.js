const express = require("express");
const app = express();
//console.log(app);
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
//console.log(app);
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
var nodemailer = require('nodemailer');
//const creds = require('./config');
//const mail = require('./mail');


const db = mysql.createPool({
  host: 'localhost',
  database: 'learner1',
  user: 'learner1',
  password: 'learner@123'
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.json());
app.use(cors());



db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});



// app.get("/show",(req,res)=>{
//  console.log("calling");
//   const query1 = "select * from append";
//   db.query(query1,(err,result)=>{
//   res.send(result);
//   console.log(result);
// });


app.post("http://exp.rem.coach/submit",(req,res)=>{
  const name = req.body.name;
  
 console.log("calling");
  const query1 = "insert into append values (?)";
  db.query(query1,[name],(err,result)=>{
  console.log(result);
  })
        
});


app.listen(4000,() => {
  console.log("RUnning in 4000");
});

