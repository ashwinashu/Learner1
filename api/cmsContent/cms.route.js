const rconst router = require("express").Router();
const cmsContent = require("./cms.controller");

const config = require("../../config");

rounter.route("/").get(cmsContent.addcontent);
router
  .route("/")
  .put(cmsContent.show);

module.exports = router;
