const rconst router = require("express").Router();
const cmsContent = require("./cms.controller");
const config = require("../../config");

rounter.route("/").get(cmsContent.testing);
router
  .route("/")
  .put(cmsContent.addcontent);

module.exports = router;
