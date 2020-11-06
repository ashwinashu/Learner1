const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  database: "learner1",
  user: "learner1",
  password: "learner@123",
})

app.get("/",(req,res)=>{
  const squery = "INSERT INTO append (name) VALUES ('Arun');"
  db.query(squery , (err,result)=>{
    res.send("Running ");
  })
})

app.listen(3004,()=>{
  console.log("Running in 3000");
})
