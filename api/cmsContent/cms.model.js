const { startConnection } = require("../../helpers/databaseConnection");
let connection = startConnection();

class CmsContent {
  static addMaster(tableName, value) {
    return new Promise((resolve, reject) => {
      connection.query(
        `insert into ${tableName} set ?`,
        [value],
        (err, rows) => {
          if (err) return reject(err);
          resolve(rows);
        }
      );
    });
  }

  static addcontent(name,men,women,total,duration,sdate,edate,men_sal,women_sal,men_sal_e,women_sal_e,total_sal) {
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
