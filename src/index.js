const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  database: "learner1",
  user: "learner1",
  password: "learner@123"
})

db.connect()


db.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})



app.get("/",(req,res)=>{
  const squery = "INSERT INTO append (name) VALUES ('Arun');"
  db.query(squery , (err,result)=>{
    res.send("Running ");
  })
})

app.listen(3008,()=>{
  console.log("Running in 3006");
})
