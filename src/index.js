const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: 'localhost',
  database: 'learner1',
  user: 'learner1',
  password: 'learner@123'
});


db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

app.post("/submit",(req,res)=>{
  console.log("calling");
});


app.listen(3000,() => {
  console.log("RUnning in 3000");
});
