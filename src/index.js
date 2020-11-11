const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const pdfTemplate = require('./documents');
const nodemailer = require('nodemailer');
//const { getMaxListeners } = require("./mail");


var port = 4000;

//mail.use();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'append'
    
  })
  
 db.connect()
//console.log(db);
db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
  
 app.get('/show', (req,res)=>{
     var sq = "select * from append";
     db.query(sq,(err,results)=>{
        //console.log(res);
        res.send(results);
        //console.log(results);
     });
   
 })
 

app.post("/submit",(req,res)=>{
  //console.log(req);
  const name = req.body.name;
  const duration = req.body.duration;
  const sdate = req.body.sdate;
  const edate = req.body.edate;
  const men = req.body.men;
  const women = req.body.women;
  const total = req.body.total;
  const men_sal = req.body.men_sal;
  const women_sal = req.body.women_sal;
  const men_sal_e = req.body.men_sal_e;
  const women_sal_e = req.body.women_sal_e;
  const total_sal = req.body.total_sal;

  
 console.log("calling");
 console.log(name);
  const query1 = "insert into append (name,men,women,total,duration,sdate,edate,men_sal,women_sal,men_sal_e,women_sal_e,total_sal) values (?,?,?,?,?,?,?,?,?,?,?,?)";
  db.query(query1,
    [name,men,women,total,duration,sdate,edate,men_sal,women_sal,men_sal_e,women_sal_e,total_sal]
    ,(err,result)=>{
  //console.log(result);
  //res.send("success");
  })
  

  db.query("select * from append", (err,result)=>{
    //console.log(err);
    //console.log(result);
    
  })
   res.send("backend recieved");       
});


app.post('/sendmail',(req,res)=>{
  //const mail = require('./mail');
 
  content = JSON.stringify(req.body)
 
// console.log(req.body);
    var sender = nodemailer.createTransport(
    {
      host: 'localhost',
      port: port,
    service:'gmail',
    auth:
    {
    user:'csecapv4@gmail.com',
    pass:'ucetcse4'
    }
    });
    
    var composemail ={
    from:'csecapv4@gmail.com',
    to:'akpgaa@gmail.com',
    subject:'TEsting',
    text: content 
    };
    
    sender.sendMail(composemail,function(error,info){
    if(error)
    {
    console.log(error);
    }
    else{
    console.log("mail sent successsfully"+info.response);
    }
    });
      res.send("Success")
    
});



  app.listen(port,()=>{
      console.log('running');
  });
  
  //db.end()