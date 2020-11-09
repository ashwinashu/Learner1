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

}

module.exports = CmsContent;
