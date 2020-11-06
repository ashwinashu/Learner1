const rconst router = require("express").Router();
const cmsContent = require("./cms.controller");

const db = require("../../db");

rounter.route("/").get(cmsContent.show);
router
  .route("/")
  .put(cmsContent.addcontent);

module.exports = router;
