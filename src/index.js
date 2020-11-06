var express = require ('express');
var mysql = require('mysql')
var app = express();


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'dbuser',
  password: '',
  database: 'my_db'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()
