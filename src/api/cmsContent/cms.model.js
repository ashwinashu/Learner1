const { startConnection } = require("../../helpers/databaseConnection");
let connection = startConnection();

class CmsContent {
  static show() {
    return new Promise((resolve, reject) => {
      connection.query(
        `selct * from append`,
        
        (err, rows) => {
          if (err) return reject(err);
          resolve(rows);
        }
      );
    });
  }

  static addcontent(name,men,women,total,duration,sdate,edate,men_sal,women_sal,men_sal_e,women_sal_e,total_sal) {
  
    return new Promise((resolve, reject) => {
      connection.query(
        `insert into append values ?,?,?,?,?,?,?,?,?,?,?,?`,
        [name,men,women,total,duration,sdate,edate,men_sal,women_sal,men_sal_e,women_sal_e,total_sal],
        (err, rows) => {
          if (err) return reject(err);
          resolve(rows);
        }
      );
    });
  }
}

module.exports = CmsContent;
