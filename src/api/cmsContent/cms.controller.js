const CmsContent = require("./cms.model");
const { endConnection } = require("../../helpers/databaseConnection");
const chalk = require("chalk");
const db = require("../../db");



const addcontent = async (req, res, next) => {
 	let body = req.body.value ? req.body.value : req.body;
 
  try {
    var result = [];
    if (device && device.id) {
      let check = await comparingObj(req);
      if (check) {
        result = await CmsContent.addcontent(
          body.name,
          body.men,
          body.women,
          body.total,
          body.duration,
          body.sdate,
          body.edate,
          body.men_sal,
          body.women_sal,
          body.men_sal_e,
          body.women_sal_e,
          body.total_sal
        );
      } else {
        result = false;
      }
    } else {
      result = await CmsContent.addcontent(
        body.name,
          body.men,
          body.women,
          body.total,
          body.duration,body.
          body.sdate,
          body.edate,
          body.men_sal,
          body.women_sal,
          body.men_sal_e,
          body.women_sal_e,
          body.total_sal
      );
    }
    //db end connection
    endConnection();
    res.send(result);
  } catch (error) {
    //db end connection
    endConnection();
    console.error(chalk.red(error));
    res.status(500);
    next(error);
  }
};

module.exports = {
  testing,
  addcontent
};
