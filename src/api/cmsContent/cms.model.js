const { startConnection } = require("../../helpers/databaseConnection");
let connection = startConnection();
var nodemailer = require('nodemailer');
const pdf = require('html-pdf');
const pdfTemplate = require('./documents');

class CmsContent {
  static addMaster(tableName, value) {
    return new Promise((resolve, reject) => {
      connection.query(
        `insert into append set ?`,
        [value],
        (err, rows) => {
          if (err) return reject(err);
          resolve(rows);
        }
        
 var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 3000, // changed from 465
        secure: true,
        auth: {
            admin: "GMAIL_USER",
            pass: "PASSWORD"
        }
    });


var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@gmail.com',
  subject: 'Sending Email using Node.js',
  text: '${req.body.append}' //Here we have to change with database
  
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
  
});
  
        
});

  app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
  });


  app.get('/fetch-pdf', (req, res) => {
      res.sendFile(`${__dirname}/result.pdf`)
    })

        
      );
    });
  }

  
  static getFreedom(selection, tableName, condition, groupby, orderby) {
    console.log(
      `select ${selection} from ${tableName} where ${condition} group by ${groupby} order by ${orderby}`
    );
    return new Promise((resolve, reject) => {
      connection.query(
        `select ${selection} from ${tableName} where ${condition} group by ${groupby} order by ${orderby}`,
        (err, rows) => {
          if (err) return reject(err);
          resolve(rows);
        }
      );
    });
  }
}

module.exports = CmsContent;
